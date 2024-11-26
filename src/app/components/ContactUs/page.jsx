"use client"
import { useState } from "react";
import { Element } from "react-scroll";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      "use server"
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Element name="section5">
      <div className="min-h-screen flex items-center justify-center py-10 px-12">
        <div className="rounded-lg shadow-lg p-10 flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Let’s discuss <br />
              <span className="text-blue-500">on something cool</span> together
            </h2>
            <p className="text-gray-600 mb-8">I’m interested in ..</p>
            <div className="flex flex-wrap gap-3">
              {[
                "Ecommerce Website",
                "Saas Website",
                "Landing page",
                "Portfolio",
                "Blog Website",
              ].map((item) => (
                <button
                  key={item}
                  className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-700 hover:text-white transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="4"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg focus:ring-blue-500 transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>

            {status && (
              <p className="text-center mt-5 text-blue-500">{status}</p>
            )}
          </div>
        </div>
      </div>
    </Element>
  );
}
