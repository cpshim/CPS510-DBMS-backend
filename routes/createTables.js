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
            `CREATE TABLE professor(
                ProfName    VARCHAR2(30) NOT NULL,
                ProfId      NUMBER,
                CONSTRAINT Prof_pk PRIMARY KEY (ProfId)
            )`
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
            `CREATE TABLE courses(
                CourseTitle VARCHAR(25) NOT NULL,
                CourseCode  VARCHAR(25) NOT NULL,
                StartDate   VARCHAR(30) NOT NULL,
                EndDate     VARCHAR(30) NOT NULL,
                NumStudents NUMBER,
                CONSTRAINT Courses_pk PRIMARY KEY (CourseCode)
            )`
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
            `CREATE TABLE student(
                StudentName VARCHAR(30) NOT NULL,
                StudentId   NUMBER,
                StudentDeg  VARCHAR(30),
                CONSTRAINT Student_pk PRIMARY KEY (StudentId)
            )`
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
            `CREATE TABLE ta(
                TaName      VARCHAR2(30) NOT NULL,
                TaId        NUMBER,
                CONSTRAINT Ta_pk PRIMARY KEY (TaId)
            )`
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
            `CREATE TABLE lecturehall(
                LecturehallName     VARCHAR(25) NOT NULL,
                LecturehallAddress  VARCHAR(25) NOT NULL,
                CONSTRAINT Lecturehall_pk PRIMARY KEY (LecturehallName)
            )`
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
            `CREATE TABLE lecture(
                LectureName VARCHAR(25),
                LectureTime VARCHAR(30) NOT NULL,
                CONSTRAINT Lecture_pk PRIMARY KEY (LectureTime)
            )`
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
            `CREATE TABLE evaluations(
                EvaluationTitle VARCHAR(25),
                EvaluationDue   VARCHAR(30) NOT NULL,
                CONSTRAINT Evaluations_pk PRIMARY KEY (EvaluationTitle)
            )`
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
            `CREATE TABLE lab(
                LabTime         VARCHAR(30) NOT NULL,
                LabSectionNum   NUMBER,
                CourseCode	    VARCHAR(25),
                CONSTRAINT Lab_pk PRIMARY KEY (CourseCode, LabSectionNum),
                CONSTRAINT Lab_fk FOREIGN KEY (CourseCode) REFERENCES courses(CourseCode)
            )`
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
            `CREATE TABLE attends(
                StudentId       REFERENCES student (StudentId),
                LabSectionNum   NUMBER,
                CourseCode      VARCHAR(25),
                CONSTRAINT Attends_pk PRIMARY KEY (StudentId, LabSectionNum, CourseCode),
                CONSTRAINT Attends_fk FOREIGN KEY (CourseCode, LabSectionNum) REFERENCES lab (CourseCode, LabSectionNum)
            )`
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
            `CREATE TABLE teacheslab(
                TaId             REFERENCES ta(TaId),
                LabSectionNum    NUMBER,
                CourseCode       VARCHAR(25),
                CONSTRAINT TeachesLab_pk PRIMARY KEY (TaId, LabSectionNum, CourseCode),
                CONSTRAINT TeachesLab_fk FOREIGN KEY (CourseCode, LabSectionNum) REFERENCES lab (CourseCode, LabSectionNum)
            )`
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
            `CREATE TABLE completes(
                StudentId        REFERENCES student(StudentId),
                EvaluationTitle  REFERENCES evaluations(EvaluationTitle),
                CONSTRAINT Completes_pk PRIMARY KEY (StudentId, EvaluationTitle)
            )`
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
            `CREATE TABLE marks(
                StudentId       REFERENCES student(StudentId),
                LabSectionNum   NUMBER,
                CourseCode      VARCHAR(25),
                Grade           VARCHAR(3),
                CONSTRAINT Marks_pk PRIMARY KEY (StudentId, LabSectionNum, CourseCode, Grade),
                CONSTRAINT Marks_fk FOREIGN KEY (CourseCode, LabSectionNum) REFERENCES lab (CourseCode, LabSectionNum)
            )`
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
            `CREATE TABLE enrollsin(
                StudentId       REFERENCES student(StudentId),
                CourseCode      REFERENCES courses(CourseCode),
                CONSTRAINT Enrollsin_pk PRIMARY KEY(StudentId, CourseCode)
            )`
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
            `CREATE TABLE teaches(
                ProfId       REFERENCES professor(ProfId),
                CourseCode   REFERENCES courses(CourseCode),
                CONSTRAINT Teaches_pk PRIMARY KEY (ProfId, CourseCode)
            )`
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
            `CREATE TABLE heldin(
                LectureTime       REFERENCES lecture(LectureTime),
                LecturehallName   REFERENCES lecturehall(LectureHallName),
                CONSTRAINT Heldin_pk PRIMARY KEY (LectureTime, LecturehallName)
            )`
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
            `CREATE TABLE leccomponentofcourse(
                LectureTime    REFERENCES lecture(LectureTime),
                CourseCode     REFERENCES courses(CourseCode),
                CONSTRAINT Leccomponentofcourse_pk PRIMARY KEY (LectureTime, CourseCode)
            )`
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
            `CREATE TABLE labcomponentofcourse(
                LabSectionNum   NUMBER,
                CourseCode      VARCHAR(25),
                CONSTRAINT Labcomponenetofcourse_pk PRIMARY KEY (LabSectionNum, CourseCode),
                CONSTRAINT Labcomponenetofcourse_fk FOREIGN KEY (CourseCode, LabSectionNum) REFERENCES lab (CourseCode, LabSectionNum)
            )`
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
            `CREATE TABLE evalcomponentofcourse(
                EvaluationTitle   REFERENCES evaluations(EvaluationTitle),
                CourseCode        REFERENCES courses(CourseCode),
                CONSTRAINT Evalcomponentofcourse_pk PRIMARY KEY (EvaluationTitle, CourseCode)
            )`
            //[103],  // bind value for :id
        );

    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
                res.send("Created all tables");
            } catch (err) {
                console.error(err);
            }
        }
    }
});

module.exports = router;