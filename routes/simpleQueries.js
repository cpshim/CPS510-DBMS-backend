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
            `SELECT studentname FROM student
                WHERE studentdeg = 'BA Business Management'
                ORDER by studentname`
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
            `SELECT profname FROM professor
                WHERE NOT profid = 178828`
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

router.get('/3', async (req, res, next) => {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.execute(
            `SELECT taname FROM ta
                WHERE taid = 214961`
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

router.get('/4', async (req, res, next) => {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.execute(
            `SELECT lecturehallname FROM lecturehall`
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

router.get('/5', async (req, res, next) => {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.execute(
            `SELECT lecturename FROM lecture
                WHERE lecturetime = '2020-09-08 10:00'
                OR lecturetime = '2020-09-09 13:00'`
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

router.get('/6', async (req, res, next) => {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.execute(
            `SELECT s.studentname FROM courses c, student s, enrollsin e
                WHERE c.coursecode = 'PHY101' 
                AND s.studentid = 808127186`
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
router.get('/7', async (req, res, next) => {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.execute(
            `SELECT coursetitle FROM courses
                WHERE startdate = '2020-09-08'`
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