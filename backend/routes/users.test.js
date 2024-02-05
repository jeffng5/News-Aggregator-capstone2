const request = require('supertest');
const bcrypt = require("bcrypt")
const { BCRYPT_WORK_FACTOR } = require("../config")

const db = require("../db.js");
const app = require("../app.js")

async function BeforeAll() {
    await db.query(`INSERT INTO users(username, password, email) VALUES ('TedWilliams', $1, 'ted.williams@baseball.com') RETURNING username`, 
    [await bcrypt.hash('password1', BCRYPT_WORK_FACTOR) ])

    await db.query(`INSERT INTO archives (username, url, title, description, author) VALUES (
        'TedWilliams',
        "Jimmy.com",
        'baseballLegend',
        'cooperstown',
        'Babe Ruth') RETURNING username
    `)
}

BeforeAll()

//////////////////////// Start TESTING /////////////////////

// Testing basic get id/username route
test("GET / works", async function () {
        const resp = await request(app).get("/");
        expect(resp.body).toEqual({
            users: [{
                id: '1'
            }]
        })
    })


describe("POST /preferences works", async function () {
    const newArchive = {
        username: 'TedWilliams',
        url: "Jimmy.com",
        title: 'baseballLegend',
        description :'cooperstown',
        author: 'Babe Ruth'
    };
    test("/preferences works", async function () {
        const resp = await request(app)
            .post("/preferences")
            .send(newArchive);
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).toEqual({
            archive : newArchive
        });
    });

})


// Testing GET archives
test("GET /archives", async function () {
    const resp = await request(app).get("/archives");
    expect(resp.body).toEqual({
        archives : [{
            username: 'TedWilliams',
            url: "Jimmy.com",
            title: 'baseballLegend',
            description: 'cooperstown',
            author: 'Babe Ruth'
        }]
    })
})