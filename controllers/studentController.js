const Student = require("../models/studentModel");

const createStudent = async(req,res) =>{
  try{
    const student = await Student.create(req.body);
    res.status(201).json(
        {
            msgg:"Your account is created",
            data: [student]
        }
    )} catch(err) 
   {
    res.status(400).json({error: err.message});
   }
};

module.exports= {createStudent}