import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Check';
import './index.css';

const Note = ({ id, title, content, deleteItem, updateItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({ title, content });

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    updateItem(id, editedNote);
    setIsEditing(false);
  };

  return (
    <div className="note-card">
      {isEditing ? (
        <>
          <input
            type="text"
            className="note-title"
            value={editedNote.title}
            onChange={(e) => setEditedNote({ ...editedNote, title: e.target.value })}
          />
          <textarea
            className="note-text"
            value={editedNote.content}
            onChange={(e) => setEditedNote({ ...editedNote, content: e.target.value })}
          />
        </>
      ) : (
        <>
          <h3 className="note-title">{title}</h3>
          <p className="note-text note-content">{content}</p>
        </>
      )}

      <div style={{ position: 'absolute', right: 16, bottom: 16, display: 'flex', gap: '10px' }}>
        {isEditing ? (
          <button className="save-btn" onClick={handleSave} title="Save">
            <SaveIcon />
          </button>
        ) : (
          <button className="edit-btn" onClick={handleEdit} title="Edit">
            <EditIcon />
          </button>
        )}

        <button className="delete-btn" onClick={() => deleteItem(id)} title="Delete">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default Note;
