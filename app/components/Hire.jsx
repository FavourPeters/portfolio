"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Hire = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_s617es9",
        "template_qbspz5a",
        formData,
        "ETL-khoewOrly233G"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Message sent successfully!", {
          position: "top-right",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setLoading(false);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        toast.error("Failed to send the message. Please try again.", {
          position: "top-right",
        });
        setLoading(false);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="flex justify-center items-center min-h-screen px-4"
      id="hire"
    >
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 md:max-w-2xl lg:max-w-4xl">
        <h2 className="text-center font-bold text-2xl mb-4">
          Let's Work Together
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Feel free to contact me with the above informations or send a message
          by filling the fields below:
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  className="block text-basic font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#211b3a85] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  className="block text-basic font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#211b3a85] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label
                  className="block text-basic font-medium mb-1"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#211b3a85] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label
                className="block font-medium mb-1 text-basic"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#211b3a85] border border-none rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-basic text-white font-bold rounded-lg py-2 transition-all duration-300 ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-opacity-90"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Hire;
