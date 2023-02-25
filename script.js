"use strict";

//////////////////////////////////
const btnElement = document.getElementById("btn");
const appElement = document.getElementById("app");

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
  const notes = [];
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  appElement.insertBefore(noteElement, btnElement);

  notes.push(noteObject);

  saveNote(notes);
}

btnElement.addEventListener("click", addNote);
