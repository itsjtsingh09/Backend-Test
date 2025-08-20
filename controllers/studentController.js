const Student = require("../models/studentModel");

const createStudent = (req,res) =>{
    const {name, email, year} = req.body;

    const student = new Student({
        name: name,
        email: email,
        year: year
    });

    student.save().then(() => {
        res.status(201).json({
            message: "Student created successfully"
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Error creating student",
            error: err.message
        });
    })
}
  
   
module.exports= {createStudent}