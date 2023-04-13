import React, { useState } from "react";
import NotesImg from "../public/Notes-img.png";
import { FcPlus } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import "./TodoApp.css";
import { useState } from "react";

function TodoApp() {
  console.log("TodoApp");
  const [items, setItems] = useState(" ");
  const [addItem, setAddItem] = useState([]);

  function inputHandler(e) {
    // e.preventDefault();
    setItems(e.target.value);
  }

  function addInputHandler() {
    setAddItem([items, ...addItem]);
    // console.log(items);
    // console.log(addItem);
  }

  function deleteHandler() {
    addItem.filter((id) => {
      console.log(id);
      console.log(addItem.indexOf());
      id !== addItem.indexOf();
    });
  }

  return (
    <>
      <div className="container">
        <figure>
          <img src={NotesImg} alt="" />
          <figcaption>Add Notes Here</figcaption>
        </figure>

        <label>
          <input
            onChange={inputHandler}
            name="inputNotes"
            value={items}
            className="input"
            placeholder="Write Notes "
          ></input>
          <FcPlus
            onClick={addInputHandler}
            style={{ backgroundColor: "white", height: "97.5%" }}
          />
        </label>
        {addItem.map((value, index) => {
          return (
            <div className="add-item" key={index}>
              {value}
              <AiFillDelete onClick={deleteHandler} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoApp;
