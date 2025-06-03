import React, { useState, useEffect } from "react";
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
    navigator.clipboard.writeText("510-730-2994");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("thapahemanta.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
            o.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-16 scroll-mt-10"
    >
      <div className="max-w-[1440px] w-full mx-auto px-10">
        {/* Section Heading */}
        <h2
          className="text-5xl font-extrabold mb-16 text-gray-900 dark:text-white text-center bg-clip-text 
              fade-in opacity-0 translate-y-6 transition-opacity transition-transform duration-700"
        >
          Let's Connect
        </h2>
        <hr className="w-48 border-gray-300 dark:border-gray-600 mx-auto mb-12" />

        <p
          className="text-lg md:text-xl text-gray-800 dark:text-gray-100 mb-12 ml-10 items-left text-center
                fade-in opacity-0 translate-y-6 transition-opacity transition-transform duration-700"
        >
          Reach out to me via email, phone, or connect with me on LinkedIn and
          GitHub.
          <br />
          Or send a quick message using the form below. I look forward to
          hearing from you!
        </p>

        {/* Two‐Column Layout */}
        <div className="flex flex-col md:flex-row md:gap-8 gap-12 items-center md:justify-center md:items-start">
          {/* ─── LEFT COLUMN: Contact Info Card ─────────────────────────── */}
          <div className=" w-full md:w-1/2">
            <div
              className="max-w-xl md:max-w-lg mx-auto relative text-gray-800 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-r-2xl p-6 shadow-lg shadow-bg-red-700/50
                transform-gpu will-change-transform fade-in opacity-0 translate-y-6
                transition-opacity transition-transform duration-500 shadow-sm"
            >
              {/* Gradient Accent Strip */}
              <div
                className="absolute inset-y-0 left-0 w-1 bg-gradient-to-br from-purple-400 to-pink-600 rounded-l"
                aria-hidden="true"
              />

              <div className="flex flex-col space-y-6">
                {/* Email */}
                <div className="flex items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                  <FiMail className="w-6 h-6 text-purple-500 mr-3" />
                  <span className=" text-lg font-medium text-gray-900 dark:text-gray-100">
                    thapahemanta.dev@gmail.com
                  </span>
                  <button
                    onClick={copyEmail}
                    className="ml-auto hover:text-purple-500 transition-colors"
                  >
                    {copied ? (
                      <FiCheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <FiCopy className="w-5 h-5 text-gray-500 dark:text-gray-300 hover:text-purple-500 transition-colors" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center border-b border-gray-200 dark:border-gray-700 mb-4 pb-4">
                  <FiPhone className="w-6 h-6 text-purple-500 mr-3" />
                  <a
                    href="tel:510-730-2994"
                    className=" text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-purple-500 transition-colors"
                  >
                    510-730-2994
                  </a>
                  <button
                    onClick={copyPhone}
                    className="ml-auto hover:text-purple-500 transition-colors"
                  >
                    {copiedPhone ? (
                      <FiCheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <FiCopy className="w-5 h-5 text-gray-500 dark:text-gray-300 hover:text-purple-500 transition-colors" />
                    )}
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex space-x-6 items-center justify-center">
                  <a
                    href="https://linkedin.com/in/thapahemanta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                  </a>
                  <a
                    href="https://github.com/hemanta12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: Contact Form ──────────────────────────────── */}
          <div className=" w-full md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="max-w-xl  md:max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-200 dark:border-gray-700
                transform-gpu will-change-transform fade-in opacity-0 translate-y-6 transition-opacity transition-transform duration-500"
            >
              {/* Full Name */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-200 font-semibold mb-2 text-lg"
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
                  className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 
                    focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-200 font-semibold mb-2 text-lg"
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
                  className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 
                    focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-200 font-semibold mb-2 text-lg"
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
                  className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 
                    focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-500 hover:to-pink-700 
                    text-white px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-semibold flex items-center"
                >
                  Send Message
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
