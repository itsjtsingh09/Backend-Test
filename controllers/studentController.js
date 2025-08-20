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

const getStudent= async(req,res) =>{

  const students = await Student.find();
  res.status(200).json({
    msgg: "List of Students",
    data:students
})
};
  
   
module.exports= {createStudent,getStudent}