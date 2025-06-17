import React, { useState } from "react";
import './index.css';

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const addEvent = (e) => {
    e.preventDefault();
    if (note.title.trim() || note.content.trim()) {
      props.passNote(note);
      setNote({ title: "", content: "" });
    }
  };

  return (
    <div className="note-box" onDoubleClick={() => setExpand(false)}>
      <form onSubmit={addEvent}>
        {expand && (
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          value={note.content}
          onChange={InputEvent}
          placeholder="Write your thoughts..."
          onClick={() => setExpand(true)}
        />
        {expand && (
          <button type="submit" title="Add note">
            ✍️
          </button>
        )}
      </form>
    </div>
  );
};

export default CreateNote;
