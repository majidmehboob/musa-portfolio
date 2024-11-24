import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-12">
      <div className=" rounded-lg shadow-lg p-10 flex flex-col md:flex-row gap-8">
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
                className="px-4 py-2  border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-700 hover:text-white transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your message"
              rows="4"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg focus:ring-blue-500 transition"
            >
              Submit
            </button>
          </form>

          {/* Social Media Icons */}
          {/* <div className="flex justify-center mt-5 gap-5 text-gray-600">
            <a href="#" className="hover:text-purple-600 transition">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-purple-600 transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-purple-600 transition">
              <FaTwitter size={24} />
            </a>
          </div>   */}
        </div>
      </div>
    </div>
  );
}
