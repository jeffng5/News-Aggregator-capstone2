const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require("../db");

router.get('/', async function (req, res, next) {
    try {
        const username= req.query
        const id = await db.query(`SELECT id FROM users WHERE username = $1`, [username]);
    }
    catch (e) {
        console.log(e)
    }
    return id.rows[0]
})

router.post("/preferences", async function (req, res, next) {
    
    try {
        const {username, url, title, description, author} = req.body
        console.log(req.body)
   
        const addArticle = await db.query(`
        INSERT INTO archives (username, url, title, description, author)
        VALUES ($1, $2, $3, $4, $5)`, [username, url, title, description, author] 
        )

        if (addArticle) { console.log("Archived")}
    } catch (e) {
        return next(e)
    }

})


router.put('/preferences', async function (req, res, next) {
    try {
        const {username, searchTopics} = req.body
        console.log(req.body)

        const result = await db.query(
            `MERGE INTO preferences as p USING users ON p.username=users.username WHEN MATCHED THEN UPDATE SET p.preferences = $1 WHEN NOT MATCHED THEN INSERT (p.username, p.preferences) VALUES ($2, $1)
        `, [searchTopics, username]);
        if (result) {console.log(result, 'updated!')}
    }
    catch (err) {
        return next(err)
    }

})

router.get('/archives', async function (req, res, next) {
    try {
        const {username} = req.query
        console.log(username)
    

     
        const results = await db.query(`SELECT * FROM archives WHERE username = $1`, [username]);

        let articles = results.rows
        console.log('youve made it')
        console.log(results.rows)
        return articles
    }

    catch (err){
        return next(err)
    }
    
})




module.exports = router