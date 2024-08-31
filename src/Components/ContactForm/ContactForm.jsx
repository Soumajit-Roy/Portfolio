import React, { useState } from "react";
import "./ContactForm.css";
import InputWithLabel from "./InputLabel";

function ContactForm() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "", // Add comment state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", inputs);
  };

  return (
    <form className="form-el" onSubmit={handleSubmit}>
      <InputWithLabel
        label="Name"
        value={inputs.name}
        onChange={handleChange}
        name="name"
      />
      <InputWithLabel
        label="Email"
        value={inputs.email}
        onChange={handleChange}
        name="email"
      />

      {/* Comment Text Area */}
      <div className="input-container">
        <label className={`input-label ${inputs.comment ? "active" : ""}`}>
          Comment
        </label>
        <textarea
          value={inputs.comment}
          onChange={handleChange}
          name="comment"
          onFocus={(e) =>
            e.target.previousElementSibling.classList.add("active")
          }
          onBlur={(e) => {
            if (e.target.value === "") {
              e.target.previousElementSibling.classList.remove("active");
            }
          }}
        />
      </div>

      {/* Submit Button */}
      <button className="btn-submit" type="submit">Submit</button>
    </form>
  );
}
export default ContactForm;
