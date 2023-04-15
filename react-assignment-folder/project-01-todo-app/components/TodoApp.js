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
      console.log("empety");

      // console.log(items);
    } else if (editData && !setToggle) {
      console.log(editData);
    } else {
      const allInputData = { id: new Date().getTime().toString(), name: items };
      console.log(allInputData.id);

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
      console.log(ab);
      console.log(...ab);
      setAddItems([...ab]);
    };
  }
  console.log(addItems);
  //////////////////////////////////////////

  function updateHandler(e) {
    const [elem] = addItems;
    console.log(elem);
    console.log(e);

    // console.log(d);

    // e === [e] ? console.log("e") : d;
    // const [d] = e;
    e.id === elem.id ? setItems(elem.name) : console.log("byyy");
    setToggle(false);
    setItems(elem.name);
    setEditData(elem.id);
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
            <BsPencil onClick={() => updateHandler(addItems)} />
          )}
        </label>
        {addItems.map((value) => {
          return (
            <div className="add-item" key={value.id}>
              {value.name}
              <BsPencil onClick={() => updateHandler(value)} />
              <AiFillDelete onClick={deleteHandler(value.id)} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoApp;
