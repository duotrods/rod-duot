import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaCalendarAlt,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";
import { FaCalendar, FaLocationArrow, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_0v9gjbl",
        "template_ufqsnoa",
        formData,
        "10gjJhFMrhNyGG-Mk"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setSuccess("Failed to send message. Try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="mt-20 border-t border-stone-900 pb-20">
        <motion.h2 whileInView={{ opacity: 1, y: 0}}
             initial={{ opacity: 0, y: -100}}
             transition={{ duration: 0.5}}  
             className="my-20 text-center text-4xl"> Contact
        </motion.h2>
      <div className="flex items-center justify-center px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-10 w-full max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 📌 LEFT CARD - Personal Info */}
          <motion.div
            className="bg-white/5 border-[1.5px] border-white/15 backdrop-blur-[1.4px] p-6 rounded-xl shadow-lg text-white transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1}}
          >
            <h2 className="text-2xl font-bold mt-4 mb-4">Address </h2>
            <div className="flex items-center gap-3 mb-3">
              <FaLocationDot size={20} className="text-blue-500" />
              <span className="text-sm">San Vicente, Panabo City, Davao del Norte, 8105</span>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Contact Information</h2>
            <div className="flex items-center gap-3 mb-3">
              <FaEnvelope size={20} className="text-blue-500" />
              <span className="text-sm">duotrodolinor@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <FaPhone size={20} className="text-blue-500" />
              <span className="text-sm">+63 9518441342</span>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Time</h2>
            <div className="flex items-center gap-3 mb-3">
              <FaCalendarAlt size={20} className="text-blue-500" />
              <span className="text-sm">Monday - Friday: 10:00AM - 5:00PM (GMT+8)</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <FaCalendarAlt size={20} className="text-blue-500" />
              <span className="text-sm">Saturday - Sunday 8:00AM - 3:00PM (GMT+8)</span>
            </div>
            
            <div className="flex items-center mt-10 gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-blue-500"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="hover:text-gray-400"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-blue-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* 📌 RIGHT CARD - Contact Form */}
          <motion.div
            className="bg-white/5 border-[1.5px] border-white/15 backdrop-blur-[1.4px] p-6 rounded-xl shadow-lg text-white transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1 }}
          >
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-white/10 border-[1.5px] border-white/15 outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-white/10 border-[1.5px] border-white/15 outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-white/10 border-[1.5px] border-white/15 outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 p-3 rounded-lg hover:bg-blue-500 transition-all"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
            {success && <p className="mt-3 text-green-400">{success}</p>}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact