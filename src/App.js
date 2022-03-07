import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [contact, setContact] = useState([]);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Title: "",
    Author: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContant = {
      id: nanoid(),
      Name: addFormData.Name,
      Title: addFormData.Title,
      Author: addFormData.Author,
    };

    // const newContacts = [...contact , newContant]
    setContact([...contact, newContant]);
    setAddFormData({ Name: "", Title: "", Author: "" });
  };

  const deleteListItem = (item) => {
    let newItemArr = contact.filter((i) => i.id !== item.id);
    setContact(newItemArr);
  };
  const editListItem = (item) => {
     let editList = contact.filter((i) => i.id !== item.id);
     
  }
  return (
    <>
      <div className="main_container">
        <form onSubmit={handleAddFormSubmit}>
          <label className="labels">Name:</label>
          <input
            type="text"
            name="Name"
            required="required"
            placeholder="Enter Serial No.."
            value={addFormData.Name}
            onChange={handleAddFormChange}
          />
          <label className="labels">Title:</label>
          <input
            type="text"
            name="Title"
            required="required"
            placeholder="Enter Title.."
            value={addFormData.Title}
            onChange={handleAddFormChange}
          />
          <label className="labels">Author:</label>
          <input
            type="text"
            name="Author"
            required="required"
            placeholder="Enter Author.."
            value={addFormData.Author}
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
          <button onClick={() => setContact([])}>Delete All</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contact.length > 0 &&
              contact.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.Name} </td>
                  <td>{contact.Title}</td>
                  <td>
                    {contact.Author}
                  </td>
                  <td >
                    <button onClick={() => deleteListItem(contact)} > Delete </button>
                    <button onClick={() => editListItem(contact)} > Edit </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
