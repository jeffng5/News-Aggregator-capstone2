const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require("../db");

let username = 'BabyBear'

router.post("/preferences", async function (req, res, next) {
    
    try {
        const {username, url, title, description, author} = req.body
        console.log(req.body)

        const fetchId = await db.query(`
        SELECT * FROM users where username = $1`, [username]);

        const addArticle = await db.query(`
        INSERT INTO archives (user_id, url, title, description, author)
        VALUES ($1, $2, $3, $4, $5)`, [fetchId.id, url, title, description, author] 
        )

        if (addArticle) { console.log("Archived")}
    } catch (e) {
        return next(e)
    }




})


router.get('/preferences', async function (req, res, next) {
    try {
        const username = req.query
        console.log(req.query)

        const id = await db.query( `SELECT id FROM users WHERE username = $1`, [username]);

    }
    catch (err) {
        return next(err)
    }

})

router.get('/archive', async function (req, res, next) {
    try {
        const username = req.query
        console.log(req.body)

        const id = await db.query( `SELECT * FROM users WHERE username = $1`, [username]);

        const results = await db.query(`SELECT url, title, description, author FROM archives WHERE user_id = $1`, [id.id]);

        let articles = results.rows
        return articles
    }
    catch (err){
        return next(err)
    }
})




module.exports = router