import React, { useState } from "react";
import emailjs from "emailjs-com";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCopy,
  FiCheckCircle,
  FiPhone,
  FiArrowRight,
} from "react-icons/fi";

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const copyPhone = () => {
    navigator.clipboard.writeText("341-203-3291");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("thapahemanta.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-100 flex flex-col items-center py-16 scroll-mt-10 "
    >
      {/* Unified Heading Style */}
      <div className="flex flex-col items-center mb-12 px-4 ">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Let's Connect
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl">
          I'd love to hear about your project! Reach out via the form or
          directly at:
        </p>
      </div>

      {/* Contact Info Card (Matches Home Style) */}
      <div className="bg-blue-50/50 p-6 rounded-lg border border-blue-200 mb-12 w-full max-w-lg">
        <div className="flex flex-col space-y-4 items-center">
          {/* Email */}
          <div className="flex items-center group">
            <FiMail className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-lg font-medium text-blue-800">
              thapahemanta.dev@gmail.com
            </span>
            <button
              onClick={copyEmail}
              className="ml-3 opacity-100 transition-opacity hover:text-blue-600"
            >
              {copied ? (
                <FiCheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <FiCopy className="w-5 h-5 text-blue-500 hover:text-blue-600" />
              )}
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center">
            <FiPhone className="w-6 h-6 text-blue-600 mr-2" />
            <a
              href="tel:341-203-3291"
              className="text-lg font-medium text-blue-800 hover:text-blue-600 transition-colors duration-200"
              aria-label="Call me"
            >
              510-730-2994
            </a>
            <button
              onClick={copyPhone}
              className="ml-3 opacity-100 transition-opacity hover:text-blue-600"
            >
              {copiedPhone ? (
                <FiCheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <FiCopy className="w-5 h-5 text-blue-500 hover:text-blue-600" />
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 pt-4">
            <a
              href="https://www.linkedin.com/in/thapahemanta"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-blue-100 transition-colors group relative"
            >
              <FiLinkedin className="w-8 h-8 text-gray-700" />
              <span className="tooltip">LinkedIn</span>
            </a>
            <a
              href="https://github.com/hemanta12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-blue-100 transition-colors group relative"
            >
              <FiGithub className="w-8 h-8 text-gray-700" />
              <span className="tooltip">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 border border-gray-200"
      >
        {/* Full Name */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2 text-lg"
          >
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
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2 text-lg"
          >
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
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2 text-lg"
          >
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
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-gradient-to-r bg-[#6f3af7] hover:bg-[#5e2ed8] text-white px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-semibold flex items-center"
          >
            Send Message
            <FiArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
