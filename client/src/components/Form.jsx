// Form.jsx
import React, {useState} from "react";

function Form({handleSubmit}) {
  const [formData, setFormData] = useState({name: "", URL: ""});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const submitForm = () => {
    handleSubmit(formData);
    setFormData({name: "", URL: ""});
  };

  return (
    <form>
      <label htmlFor="linkName">Link Name:</label>
      <input type="text" id="linkName" name="name" value={formData.name} onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="linkURL">Link URL:</label>
      <input type="text" id="linkURL" name="URL" value={formData.URL} onChange={handleChange} />
      <br />
      <br />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
}

export default Form;
