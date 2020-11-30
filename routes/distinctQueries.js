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
            `SELECT ProfId AS Id_Of_PhysicsProf FROM teaches
                WHERE CourseCode = 'PHY101'
                OR CourseCode= 'PHY201'
                ORDER BY ProfId`
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
            `SELECT DISTINCT ProfId AS Id_Of_PhysicsProf FROM teaches
                WHERE CourseCode = 'PHY101'
                OR CourseCode= 'PHY201'
                ORDER BY ProfId`
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