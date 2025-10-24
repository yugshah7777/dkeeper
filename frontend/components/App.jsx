import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {backend} from "../../src/declarations/backend";

function App() {
  const [notes, setNotes] = useState([]);

  async function addNotes(event) {
    console.log(event);
    await backend.createNote(event[0], event[1]);
    setNotes((prevValue) => {
      // return [...prevValue, event];
      return [event, ...prevValue]; // to ensure new notes are added at beginning
    });
  }

  useEffect(() => { // triggers everytime when rendered
    fetchData();
  }, []); // [] another parameter is added such that useEffect triggers only once on reload

  async function fetchData() {
    const notesArray = await backend.readNotes();
    const allNotes = notesArray.map(note => [note.title, note.content]);
    setNotes(allNotes);
  }

  async function deleteNote(id) {
    await backend.removeNote(id);
    setNotes((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNotes} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note[0]}
          content={note[1]}
          del={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
