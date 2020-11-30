const { response } = require('express');
const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');

require('dotenv').config()

router.get('/', async (req, res) => {
    let connection;

    //1
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO professor VALUES(:1, :2)`,
            [
                ['Dr.Toby Herring', 178828],
                ['Dr.Kaiya Zhang', 801677],
                ['Dr.Kamila Barnett', 686380],
                ['Dr.Owain Ahmed', 751149],
                ['Dr.Ezra Acosta', 728191],
                ['Dr.Edward Howling', 322299]
            ], 
            { autoCommit: true } // bind value for :id
        );
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
   
    
    //2
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO courses VALUES(:1, :2, :3, :4, :5)`,
            [
                ['Intro to Physics', 'PHY101', '2020-09-08', '2020-12-07', 59],
                ['Intermidate Physics', 'PHY201', '2020-09-08', '2020-12-07', 49],
                ['Intro to Philosophy', 'PHL101', '2020-09-08', '2020-12-07', 93],
                ['Calculus 1', 'MTH210', '2020-09-08', '2020-12-07', 130],
                ['Intro to Business', 'BUS100', '2020-09-08', '2020-12-07', 217]
            ], 
            { autoCommit: true } // bind value for :id
        );

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
    
    //3
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO student VALUES(:1, :2, :3)`,
            [
                ['Tatiana Stanley', 808127186, 'B. Sc Physics'],
                ['Kaja Jaramillo', 315767651, 'B. Sc Undeclared'],
                ['Callam Francis', 759597823, 'BA Business Management'],
                ['Noah Lin', 583307356, 'B. Sc Physics'],
                ['Ifrah Barton', 462760973, 'B. Eng Software Engineering'],
                ['Karson Carlson', 146037295, 'B. Eng Electrical Engineering'],
                ['Ophelia Hayes', 562466406, 'B. Eng Mechanical Engineering'],
                ['Dennis Wallace', 253880975, 'B. Sc Physics'],
                ['Yousuf Ray', 310177101, 'BA Business Management'],
                ['Savanna Lee', 114955469, 'B. Sc Physics']
            ], 
            { autoCommit: true } // bind value for :id
        );

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
    
    //4
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO ta VALUES(:1, :2)`,
            [
                ['Mihai Reynolds', 214961],
                ['Anniyah Porter', 839424],
                ['Connor Hubbard', 478621],
                ['Elissa Foster', 180138],
                ['Vikram Morse', 381906],
                ['Kiaan Rivera', 410244]
            ], 
            { autoCommit: true } // bind value for :id
        );

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
    
    //5
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO lecturehall VALUES(:1, :2)`,
            [
                ['Hall 1', '12 Almond Street'],
                ['Hall 2', '57 Desmond Street'],
                ['Hall 3', '8 Queen Street']
            ], 
            { autoCommit: true } // bind value for :id
        );

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
    
    //6
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO lecture VALUES(:1, :2)`,
            [
                ['PHY101','2020-09-08 10:00'],
                ['PHY101','2020-09-10 13:00'],
                ['PHY201','2020-09-09 08:00'],
                ['PHY201','2020-09-14 14:00'],
                ['PHL101','2020-09-11 16:00'],
                ['PHL101','2020-09-14 11:00'],
                ['MTH210','2020-09-08 12:00'],
                ['BUS100','2020-09-09 13:00']
            ], 
            { autoCommit: true } // bind value for :id
        );

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
    
    //7
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO evaluations VALUES(:1, :2)`,
            [
                ['Assignment 1','2020-09-13 23:59'],
                ['Assignment 2','2020-10-10 23:59'],
                ['Midterm 1','2020-10-20 12:00'],
                ['Midterm 2','2020-11-10 15:00'],
                ['Final Exam','2020-12-14 09:00']
            ], 
            { autoCommit: true } // bind value for :id
        );

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
    
    //8
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO lab VALUES(:1, :2, :3)`,
            [
                ['2020-09-15 12:00:00', 1, 'PHY101'],
                ['2020-09-16 14:00:00', 2, 'PHY101'],
                ['2020-09-16 10:00:00', 1, 'PHY201'],
                ['2020-09-17 12:00:00', 2, 'PHY201'],
                ['2020-09-10 16:00:00', 1, 'MTH210'],
                ['2020-09-11 14:00:00', 2, 'MTH210']
            ], 
            { autoCommit: true } // bind value for :id
        );

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

    //9
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO attends VALUES(:1, :2, :3)`,
            [
                [808127186, 1, 'PHY101'],
                [315767651, 2, 'PHY101'],
                [462760973, 1, 'MTH210'],
                [562466406, 2, 'PHY201'],
                [253880975, 1, 'PHY201']
            ], 
            { autoCommit: true } // bind value for :id
        );

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
    
    //10
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO teacheslab VALUES(:1, :2, :3)`,
            [
                [214961, 1, 'PHY101'],
                [839424, 2, 'PHY101'],
                [478621, 1, 'PHY201'],
                [180138, 2, 'PHY201'],
                [381906, 1, 'MTH210'],
                [410244, 2, 'MTH210']
            ], 
            { autoCommit: true } // bind value for :id
        );

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
    
    //11
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO completes VALUES(:1, :2)`,
            [
                [808127186, 'Assignment 1'],
                [315767651, 'Assignment 2'],
                [759597823, 'Midterm 1'],
                [583307356, 'Midterm 2'],
                [462760973, 'Final Exam']
            ], 
            { autoCommit: true } // bind value for :id
        );

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
    
    //12
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO marks VALUES(:1, :2, :3, :4)`,
            [
                [808127186, 1, 'PHY101', 'A'],
                [315767651, 2, 'PHY101', 'B'],
                [462760973, 1, 'MTH210', 'A+'],
                [562466406, 2, 'PHY201', 'C+'],
                [253880975, 1, 'PHY201', 'A-']
            ], 
            { autoCommit: true } // bind value for :id
        );

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
    
    //13
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO enrollsin VALUES(:1, :2)`,
            [
                [808127186, 'PHY101'],
                [315767651, 'PHY101'],
                [462760973, 'MTH210'],
                [562466406, 'PHY201'],
                [253880975, 'PHY201'],
                [310177101, 'BUS100'],
                [872287605, 'BUS100'],
                [114955469, 'PHL101'],
                [114955469, 'MTH210'],
                [562466406, 'PHY101'],
                [462760973, 'BUS100']
            ], 
            { autoCommit: true } // bind value for :id
        );

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
    
    //14
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO teaches VALUES(:1, :2)`,
            [
                [801677, 'PHY201'],
                [686380, 'MTH210'],
                [751149, 'PHL101'],
                [728191, 'BUS100'],
                [178828, 'PHY201'],
                [178828, 'PHL101'],
                [686380, 'PHL101'],
                [801677, 'PHY101'],
                [322299, 'PHY101'],
                [178828, 'PHY101'],
                [801677, 'PHL101'],
                [322299, 'PHL101'],
                [322299, 'MTH210'],
                [728191, 'PHL101'],
                [322299, 'BUS100'],
                [686380, 'BUS100']
            ], 
            { autoCommit: true } // bind value for :id
        );

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
    
    //15
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO heldin VALUES(:1, :2)`,
            [
                ['2020-09-08 10:00', 'Hall 1'],
                ['2020-09-09 08:00', 'Hall 2'],
                ['2020-09-08 12:00', 'Hall 3']
            ], 
            { autoCommit: true } // bind value for :id
        );

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
    
    //16
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO leccomponentofcourse  VALUES(:1, :2)`,
            [
                ['2020-09-08 10:00', 'PHY101'],
                ['2020-09-09 08:00', 'PHY201'],
                ['2020-09-09 13:00', 'BUS100'],
                ['2020-09-08 12:00', 'MTH210'],
                ['2020-09-11 16:00', 'PHL101']
            ], 
            { autoCommit: true } // bind value for :id
        );

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
    
    //17
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO labcomponentofcourse  VALUES(:1, :2)`,
            [
                [1, 'PHY101'],
                [2, 'PHY101'],
                [1, 'PHY201'],
                [2, 'PHY201'],
                [1, 'MTH210'],
                [2, 'MTH210']
            ], 
            { autoCommit: true } // bind value for :id
        );

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
    
    //18
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.executeMany(
            `INSERT INTO evalcomponentofcourse  VALUES(:1, :2)`,
            [
                ['Assignment 1', 'PHY101'],
                ['Assignment 2', 'PHY201'],
                ['Midterm 1', 'PHL101'],
                ['Midterm 2', 'BUS100'],
                ['Final Exam', 'MTH210'],
                ['Midterm 1', 'MTH210'],
                ['Midterm 2', 'PHY101']
            ], 
            { autoCommit: true } // bind value for :id
        );

    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
                res.send("Inserted data into tables");
            } catch (err) {
                console.error(err);
            }
        }
    }
    
});

module.exports = router;