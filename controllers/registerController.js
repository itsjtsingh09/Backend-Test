const Registration = require("../models/registerModel");
const Student = require("../models/studentModel");
const Event = require("../models/eventModel");
const sendEmail = require("../Email/sendEmail");

const registerStudentEvent = async (req, res) =>{
  try {
    const {studentId,eventId } = req.body;

    const student = await Student.findById(studentId);
    const event = await Event.findById(eventId);

    if (!student || !event){
      return res.status(404).json({ error: "Student or Event not found" });
    }

    const registration = await Registration.create({ student:studentId,event: eventId});

  
    const subject = `Registration Confirmed for  ${event.title}`;
    const text = `Hello ${student.name}, you have successfully registered for ${event.title} on ${event.date.toDateString()} at ${event.venue}.`;

    await sendEmail(student.email,subject, text);

    res.json({ message:"Registration successful and email sent", registration});} catch(err) {
    res.status(400).json({ error: err.message });
  }
};

const getEventRegistrations =async (req,res) =>{
  try{
    const eventId = req.params.id;
    const registrations = await Registration.find({event: eventId}).populate("student");
    res.status(201).json({
        data:registrations
    })
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports={registerStudentEvent,getEventRegistrations}