import React, { useState } from "react";
import NotesImg from "../public/Notes-img.png";
import { FcPlus } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

import "./TodoApp.css";
import { useState } from "react";

function TodoApp() {
  console.log("TodoApp");
  const [items, setItems] = useState(" ");
  const [addItems, setAddItems] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editData, setEditData] = useState(null);

  function inputHandler(e) {
    setItems(e.target.value);
  }

  function addInputHandler() {
    if (items === " ") {
      alert("please fill the data");

      // console.log(items);
    } else if (items && !toggle) {
      setAddItems(
        addItems?.map((elem) => {
          console.log(elem.id);
          console.log(editData);
          if (elem.id === editData) {
            return { ...elem, name: items };
          }
          return elem;
        })
      );
      setToggle(true);
      setItems(" ");
      setEditData(null);
    } else {
      const allInputData = { id: new Date().getTime().toString(), name: items };

      setAddItems([...addItems, allInputData]);
      setItems(" ");
    }

    console.log(addItems);
  }

  function deleteHandler(indexes) {
    return function re() {
      const ab = addItems.filter((elem) => {
        return indexes !== elem.id;
      });

      setAddItems([...ab]);
    };

    setItems(" ");
  }
  console.log(addItems);
  //////////////////////////////////////////

  function updateHandler(value) {
    console.log(value);

    console.log(addItems);
    let newEditItems = addItems.find((elem) => {
      console.log(elem.id);
      console.log(value?.id);
      console.log(elem.id === value.id);
      return elem.id === value.id;
    });
    console.log(newEditItems);
    setToggle(false);
    console.log(newEditItems);
    setItems(newEditItems?.name);
    setEditData(value.id);
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
          {toggle ? (
            <FcPlus
              onClick={addInputHandler}
              style={{ backgroundColor: "white", height: "97.5%" }}
            />
          ) : (
            <BsPencil onClick={addInputHandler} />
          )}
        </label>
        {addItems.map((value) => {
          return (
            <div className="add-item " key={value.id}>
              {console.log(value)}
              {value.name}
              <div className="icon">
                <BsPencil onClick={() => updateHandler(value)} />
                <AiFillDelete onClick={deleteHandler(value.id)} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoApp;
