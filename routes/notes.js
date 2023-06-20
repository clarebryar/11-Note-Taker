const notes = require("express").Router();

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
    };
    readAndAppend(notesContent, "./db/db.json");
    res.json("note added");
  } else {
    res.errored("error in adding note");
  }
});

module.exports = notes;
