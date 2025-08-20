const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name:{ 
    type: String, 
    required: true 
    },

  email:{ 
    type: String, 
    required: true, 
    unique: true 
    },

  year:{
    type: Number, 
    required: true 
    }
});

module.exports  = mongoose.model('Student', studentSchema);