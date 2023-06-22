const notes = require("express").Router();
const { v4: uuidv4 } = require('uuid');

const { readAndAppend, readFromFile } = require("../helper-functions/util");

notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notes.post("/", (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    const notesContent = {
      title,
      text,
      id: uuidv4(),
    };
    readAndAppend(notesContent, "./db/db.json");
    res.json("note added");
  } else {
    res.errored("error in adding note");
  }
});


// notes.delete('/:id', (req, res) => {
//   const {id} = req.body
//   readFromFile("./db/db.json")
//   .then((data) => {
//   const savedNotes = res.json(JSON.parse(data)))
// }
 
//   console.log('deleting')

// })

module.exports = notes;
