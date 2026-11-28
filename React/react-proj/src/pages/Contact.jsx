import React from 'react'
import { useState } from 'react'
import { z } from 'zod'

function Contact() {

  const schema = z.object({
    name: z.string().min(3,{message: "Name must be at least 3 characters long" }) .regex(/^[a-zA-Z\s]+$/, { message: "Name must contain only letters" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const result = schema.safeParse(formData);
    console.log(result);
    if (!result.success) {

      const fieldErrors = result.error.flatten().fieldErrors;
      setError(fieldErrors);

      console.log("Field Errors:", fieldErrors);
      return;
    }
    setError({});
    console.log("Form Data:", formData);
    setStatus("Form submitted successfully!");
  }

  const [status, setStatus] = useState("");

  const [error, setError] = useState({});

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Welcome to Contact Component
      </h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <input
            className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <input
            className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <input
            className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
          />
          {error.message && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>

        {status && (
          <p className="text-green-600 text-sm font-medium text-center">{status}</p>
        )}

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md cursor-pointer transition"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact