import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  function chanTitle(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function chanNote(event) {
    const newNote = event.target.value;
    setNote(newNote);
  }

  function sub(event) {
    props.add([title, note]);
    setTitle("");
    setNote("");
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={sub}>
        <input
          name="title"
          onChange={chanTitle}
          placeholder="Title"
          value={title}
        />
        <textarea
          name="content"
          onChange={chanNote}
          placeholder="Take a note..."
          value={note}
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

// import React, { useState } from "react";

// function CreateArea(props) {
//   const [note, setNote] = useState({
//     title: "",
//     content: ""
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setNote(prevNote => {
//       return {
//         ...prevNote,
//         [name]: value
//       };
//     });
//   }

//   function submitNote(event) {
//     props.onAdd(note);
//     setNote({
//       title: "",
//       content: ""
//     });
//     event.preventDefault();
//   }

//   return (
//     <div>
//       <form>
//         <input
//           name="title"
//           onChange={handleChange}
//           value={note.title}
//           placeholder="Title"
//         />
//         <textarea
//           name="content"
//           onChange={handleChange}
//           value={note.content}
//           placeholder="Take a note..."
//           rows="3"
//         />
//         <button onClick={submitNote}>Add</button>
//       </form>
//     </div>
//   );
// }

// export default CreateArea;
