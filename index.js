const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models");

// connect to mongodb server
mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://user1:X4OhmAJs40BmEiNO@cluster0.cvejt9k.mongodb.net/school_db?authSource=admin&readPreference=primary&directConnection=false`
  )
  .catch((err) => {
    console.log(err);
  });

// create express server
const app = express();

// add middleware
app.use(express.json());

// retrieve student data
app.get("/:studentID", async (req, res) => {
  // get the student ID
  let studentID = req.params.studentID;

  // retrieve the student ID from the database
  Student.findOne({ studentID: studentID }).then(studentDoc => {
    // if a student record matching the ID is found, return it 
    // else return a not found error
    if (studentDoc) {
        res.status(200).send({
            message: "Successfully retrieved student record",
            data: studentDoc
        })
    } else {
        res.status(404).send({
            message: `Student with ID = ${studentID} was not found`
        })
    }
  })
});

// save student data
app.post("/", async (req, res) => {
  // get request body
  let data = req.body;

  // create a student document
  let newStudent = new Student({
    studentID: data.studentID,
    firstName: data.firstName,
    lastName: data.lastName,
    sex: data.sex,
    level: data.level,
  });

  // save the student document
  newStudent.save(async (err, newStudentDoc) => {
    if (err) {
      // log the error
      console.error(err);

      // return internal server error from the database
      res.status(500).send({
        message: err.message,
      });
    } else {
      // return success message and newly added student document
      res.status(200).send({
        message: `Student added successfully`,
        data: newStudentDoc,
      });
    }
  });
});

// start listening for requests
app.listen(process.env.PORT || 3000);
