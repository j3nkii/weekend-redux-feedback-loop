const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('GET /form', req.body);
    const sql = `
    INSERT INTO feedback("feeling", "sleep", "meals", "journal")
    VALUES ($1, $2, $3, $4);`
    let qParams = [
        req.body.feeling,
        req.body.sleep,
        req.body.meals,
        req.body.journal,
    ]
    pool.query(sql, qParams).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /form', error)
        res.sendStatus(500);
    });
})

module.exports = router;