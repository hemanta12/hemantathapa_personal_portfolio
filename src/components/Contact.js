// Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Integration
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (err) => {
          console.error('FAILED...', err);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-100 flex flex-col items-center py-16 scroll-mt-10"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8 mt-10">Let's get in touch</h2>

      {/* Personal Message */}
      <p className="text-lg text-center max-w-2xl mb-8 px-4">
        I'd love to hear from you! Whether you have a question or just want to say hello, feel free to get in touch.
      </p>

      {/* Contact Information */}
      <div className="flex flex-col items-center mb-8">
        {/* Email */}
        <p className="text-lg mb-2">
        <p className=" "><b>Email: </b>contact.thapahemanta@gmail.com</p>
        <p className=" "><b>Phone: </b>341-203-3291</p>
        </p>
        {/* Social Links */}
        <div className="flex space-x-4">
          
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className=" "
          >
            
            <img src={linkedin} alt="linkedin" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"/>
            
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/yourusername" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black"
          >
            <img src={github} alt="github" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"/>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8"
      >
        {/* Full Name */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Your Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6f3af7]"
          />
        </div>
        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6f3af7]"
          />
        </div>
        {/* Message */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6f3af7]"
          ></textarea>
        </div>
        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#6f3af7] text-white px-6 py-2 rounded-lg hover:bg-[#5e2ed8] transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
