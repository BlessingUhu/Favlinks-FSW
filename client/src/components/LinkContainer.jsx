import React, {useState, useEffect} from "react";
import Table from "./Table";
import Form from "./Form";

function LinkContainer() {
  const [favLinks, setFavLinks] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetch("http://localhost:3000/api/links")
      .then((response) => response.json())
      .then((data) => setFavLinks(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  const removeLink = (id) => {
    const updatedLinks = favLinks.filter((link) => link.id !== id);
    setFavLinks(updatedLinks);

    // Send a DELETE request to the server
    fetch(`http://localhost:3000/api/links/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log("Link deleted:", data))
      .catch((error) => console.error("Error deleting link:", error));
  };

  const handleSubmit = (favLink) => {
    // Send a POST request to the server to add a new link
    fetch("http://localhost:3000/api/links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favLink),
    })
      .then((response) => response.json())
      .then((data) => setFavLinks([...favLinks, data]))
      .catch((error) => console.error("Error adding link:", error));
  };

  return (
    <div>
      <h1>My Favorite Links</h1>
      <p>Add a new link with a name and URL to the table! </p>

      <Table linkData={favLinks} removeLink={removeLink} />

      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default LinkContainer;
