const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');

require('dotenv').config()

router.get('/1', async (req, res, next) => {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.execute(
            `SELECT professor.ProfName FROM professor, teaches
            WHERE teaches.CourseCode = 'PHY101' AND teaches.ProfId = professor.ProfId`
            //[103],  // bind value for :id
        );
        console.log(result.rows);
        res.json(result);

    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
});

router.get('/2', async (req, res, next) => {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.execute(
            `SELECT professor.ProfName FROM professor, teaches
            WHERE teaches.CourseCode = 'PHY101' AND teaches.ProfId = professor.ProfId
            MINUS (SELECT professor.ProfName FROM teaches, professor 
                        WHERE teaches.CourseCode = 'BUS100' AND teaches.ProfId = professor.ProfId)`
            //[103],  // bind value for :id
        );
        console.log(result.rows);
        res.json(result);

    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
});

module.exports = router;