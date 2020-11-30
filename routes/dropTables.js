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

        const result = await connection.execute(
            `DROP TABLE attends`
            //[103],  // bind value for :id
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
   
    //2
    try {
        connection = await oracledb.getConnection({
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectString: process.env.CONNECTION
        });

        const result = await connection.execute(
            `DROP TABLE compeletes`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE enrollsin`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE heldin`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE evalcomponentofcourse`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE labcomponentofcourse`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE leccomponentofcourse`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE marks`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE teaches`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE teacheslab`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE evaluations`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE lab`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE lecturehall`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE courses`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE lecture`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE ta`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE professor`
            //[103],  // bind value for :id
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

        const result = await connection.execute(
            `DROP TABLE student`
            //[103],  // bind value for :id
        );

    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
                res.send("Dropped all tables");
            } catch (err) {
                console.error(err);
            }
        }
    }
});

module.exports = router;