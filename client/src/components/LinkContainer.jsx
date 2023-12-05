// LinkContainer.jsx
import React, {useState} from "react";
import Table from "./Table";
import Form from "./Form";

function LinkContainer() {
  // Step 8: Create a state object to hold an array called favLinks
  const [favLinks, setFavLinks] = useState([]);

  // Step 9: Create a removeLink function that updates the state and removes an item from favLinks
  const removeLink = (index) => {
    const updatedLinks = [...favLinks];
    updatedLinks.splice(index, 1);
    setFavLinks(updatedLinks);
  };

  // Step 11: Create a function called handleSubmit to update the state of favLinks and add a new favLink from Form
  const handleSubmit = (favLink) => {
    setFavLinks([...favLinks, favLink]);
  };

  // Step 13: Create a method called submitForm that calls handleSubmit, passes the Form data, and resets the state of the Form values
  const submitForm = (formData) => {
    handleSubmit(formData);
  };

  return (
    <div>
      <h1>My Favorite Links</h1>
      <p>Add a new link with a name and URL to the table! </p>

      {/* Step 6: Pass a prop called linkData to your Table component from the LinkContainer component */}
      <Table linkData={favLinks} removeLink={removeLink} />

      {/* Step 14: Render the Form component below the Table component */}
      <Form handleSubmit={submitForm} />
    </div>
  );
}

export default LinkContainer;
