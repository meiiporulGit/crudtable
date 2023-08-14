const mongoose = require('mongoose')

const pupilschema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
      },
      class: {
        type: String,
        require: true,
      },
      sub1: {
        type: Number,
        require: true,
      },
      sub2: {
        type: Number,
        require: true,
      },
     
      
    });
    


module.exports = mongoose.model('db',pupilschema)