import React from "react";
import { useState } from "react";

function ContactInfo() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });

  const [lists, setList] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });

    event.preventDefault();
  }
  function addList() {
    setList((prevList) => {
      return [...prevList, contact];
    });

    setContact({
      firstName: "",
      lastName: "",
      email: "",
      description: "",
    });
  }
  function deleteItem(id) {
    console.log(id);

    setList((prevList) => {
      return prevList.filter((list, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div style={{ margin: "40px auto", width: "500px" }}>
      <div className=" ">
        <div className="form-group">
          <label>First Name</label>
          <input
            name="firstName"
            onChange={handleChange}
            value={contact.firstName}
            className="form-control"
            placeholder="First Name...."
          ></input>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            name="lastName"
            onChange={handleChange}
            value={contact.lastName}
            className="form-control"
            placeholder="Last Name..."
          ></input>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            name="email"
            onChange={handleChange}
            value={contact.email}
            className="form-control"
            placeholder="Email ...."
          ></input>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            onChange={handleChange}
            name="description"
            value={contact.description}
            rows="3"
            placeholder="Details......................."
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary mb-2"
          onClick={addList}
        >
          Add
        </button>
      </div>

      <ul>
        {lists.map((list, index) => {
          return (
            <li key={index} id={index} className="containerdiv">
              <h1>{list.firstName}</h1>
              <h2>{list.lastName}</h2>
              <p>{list.email}</p>
              <p>{list.description}</p>
              <button
                onClick={() => {
                  deleteItem(index);
                }}
                className="btn btn-primary btn-block "
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactInfo;
