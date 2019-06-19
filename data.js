// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// this will be our data base's data structure 
const PersonSchema = new Schema(
  {
    PersonId: Number,
    Name: String,
    LastName: String,
    Deactivated: Boolean,
    SysCreationDate: {
        type: Date,
        default: Date.now
    },
    LastModDate: Date
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Person", PersonSchema);