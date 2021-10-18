const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: {
        type: String,
        validate(v) {
            if(v != "HIGH" && v != "LOW" && v != "MEDUIM") throw new Error("Value must be HIGH, MEDUIM, or LOW")
        }
    },
    dateAdded: Date,
    dateUpdated: Date,
})

const Note  = mongoose.model("Note", NoteSchema)
module.exports = Note