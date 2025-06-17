import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import "./index.css";

const App = () => {

  const [addItem, setAddItem] = useState([]);

  const updateNote = (id, updatedNote) => {
    setAddItem((prevNotes) =>
      prevNotes.map((note, index) =>
        index === id ? updatedNote : note
      )
    );
  };


  const addNote = (note) => {
    //alert("I am clicked");
    setAddItem((prevData) => {
      return [...prevData, note];
    })
  };

  useEffect(() => {
    const savedNotes = localStorage.getItem("rx-notes");
    if (savedNotes) {
      setAddItem(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("rx-notes", JSON.stringify(addItem));
  }, [addItem]);

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <div className="app-wrapper">
        <Header />
        <CreateNote passNote={addNote} />

        <div className="notes-container">
          {addItem.map((val, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
                updateItem={updateNote}
              />
            );
          })}
        </div>

        <Footer />
      </div>
    </>

  );

};

export default App;