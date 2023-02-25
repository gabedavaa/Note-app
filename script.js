"use strict";

//////////////////////////////////
const btnElement = document.getElementById("btn");
const appElement = document.getElementById("app");

getNotes().forEach((note) => {
  const noteElemet = createNoteElement(note.id, note.content);
  appElement.insertBefore(noteElemet, btnElement);
});

function createNoteElement(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;

  element.addEventListener("dblclick", () => {
    const warning = confirm("Do you want to delete this note?");
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  return element;
}

function deleteNote(id, element) {
  console.log(555);
}

function updateNote() {}

function addNote() {
  const notes = getNotes();
  console.log(notes);
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  appElement.insertBefore(noteElement, btnElement);

  notes.push(noteObject);

  saveNote(notes);
}

function saveNote(notes) {
  localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNotes() {
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}

btnElement.addEventListener("click", addNote);
