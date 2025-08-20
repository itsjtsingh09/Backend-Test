const Event = require("../models/eventModel");

const createEvent= async(req,res)=>{
  try{
    const event = await Event.create(req.body);
    res.status(201).json(
        {
            msgg:"Event created successfully",
            data: [event]
        }
    )
  } catch(err){
    res.status(400).json({ error: err.message });
  }
};

const getEvents= async(req,res) =>{

  const events = await Event.find();
  res.status(200).json({
    msgg: "List of Events",
    data:events
})
};

module.exports = {createEvent,getEvents};