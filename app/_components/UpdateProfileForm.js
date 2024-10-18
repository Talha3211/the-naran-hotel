"use client";

import { updateProfile } from "../_lib/action";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export default function UpdateProfileForm({ children, guest }) {
  const [idError, setIdError] = useState(""); // To hold error message for ID validation
  const [formError, setFormError] = useState(""); // For handling general form errors

  // Function to handle input validation for National ID
  const handleNationalIDChange = (e) => {
    const value = e.target.value;

    // Check if input contains only numeric characters and its length is between 6 and 15 digits
    if (!/^\d*$/.test(value)) {
      setIdError("Only numbers are allowed");
    } else if (value.length < 6 || value.length > 15) {
      setIdError("National ID must be between 6 and 15 digits");
    } else {
      setIdError(""); // Clear the error message if the input is valid
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    // Prevent form from submitting if there is an error
    if (idError) {
      e.preventDefault(); // Prevent submission if National ID is invalid
      setFormError("Please fix the errors in the form before submitting.");
    } else {
      setFormError(""); // Clear form error if there are no validation issues
    }
  };

  return (
    <div>
      <form
        action={updateProfile}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
        onSubmit={handleSubmit} // Handle form submit event
      >
        <div className="space-y-2">
          <label>Full name</label>
          <input
            name="fullName"
            disabled
            defaultValue={guest.fullName}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label>Email address</label>
          <input
            name="email"
            disabled
            defaultValue={guest.email}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled
