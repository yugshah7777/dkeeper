import React from "react";

function Note(props) {
  function sub(event) {
    props.del(props.id);
    event.preventDefault();
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={sub}>DELETE</button>
    </div>
  );
}

export default Note;
