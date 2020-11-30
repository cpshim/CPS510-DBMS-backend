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
            `SELECT DISTINCT student.StudentName FROM student, enrollsin
            WHERE enrollsin.CourseCode = 'PHY101' 
                OR enrollsin.CourseCode = 'BUS100'
            ORDER BY StudentName DESC`
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
            `SELECT DISTINCT p.ProfName, p.ProfId
            FROM professor p, teaches
            WHERE teaches.CourseCode = 'PHY201'
                OR teaches.CourseCode = 'MTH210'
            ORDER BY ProfName`
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
            `SELECT DISTINCT enrollsin.StudentId 
            FROM enrollsin, attends, lab
                WHERE (enrollsin.CourseCode = 'PHY201'
                    AND attends.CourseCode = 'PHY201'
                    AND lab.LabSectionNum = 1)`
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
            `SELECT DISTINCT student.StudentId
            FROM student
            WHERE EXISTS
            (SELECT enrollsin.StudentId 
             FROM professor, teaches, enrollsin
             WHERE ((teaches.CourseCode = 'BUS100' AND enrollsin.StudentId = student.StudentId)
                OR (teaches.CourseCode = 'PHY201' AND enrollsin.StudentId = student.StudentId)))`
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
            `SELECT DISTINCT professor.ProfId, professor.ProfName FROM teaches, professor
            WHERE teaches.CourseCode = 'PHY101'
                AND teaches.ProfId = professor.ProfId`
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