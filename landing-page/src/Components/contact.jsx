import React, { useState, useContext } from "react";
import ThemeContext from "../Context/ThemeContextContext.js";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the form data to your backend or service
  }

  return (
    <section
      id="contact"
      className={`relative w-full py-20 px-23 overflow-hidden ${
        isDark
          ? "bg-[#0f0712]"
          : "bg-gradient-to-br from-white via-[#f9f4f9] to-[#f7eaf7]"
      }`}
    >
      {/* Decorative blurred circles */}
      <div
        className={`absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-60 z-0 ${
          isDark ? "bg-[#a855f7]/10" : "bg-[#5affff]/20"
        }`}
      />
      {/* Center-left blurred circle (moved from top-left corner) */}
      <div
        className={`absolute top-1/2 left-1/4 transform -translate-y-1/2 w-72 h-72 rounded-full opacity-60 blur-3xl z-0 ${
          isDark ? "bg-[#b76be0]/10" : "bg-[#9d3ecb]/20"
        }`}
      />
      {/* Center-right blurred circle */}
      <div
        className={`absolute top-1/2 right-1/4 transform -translate-y-1/2 w-72 h-72 rounded-full opacity-10 blur-3xl z-0 ${
          isDark
            ? "bg-[#1b0f20]"
            : "bg-gradient-to-br from-[#ddd6fe] to-[#e9d5ff]"
        }`}
      />
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="flex items-center justify-center mb-4">
          <span className="inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
          <span
            className={`uppercase tracking-widest text-xs font-semibold ${
              isDark ? "text-[#b76be0]" : "text-[#702c91]"
            }`}
          >
            Contact
          </span>
        </div>
        <h2
          className={`text-3xl md:text-4xl font-extrabold text-center mb-4 drop-shadow-sm tracking-tight ${
            isDark ? "text-[#e9e7ee]" : "text-[#2d123a]"
          }`}
        >
          Get in Touch
        </h2>
        <p
          className={`text-lg md:text-2xl text-center mb-10 max-w-xl mx-auto ${
            isDark ? "text-[#e9e7ee]/80" : "text-[#3f3f3f]"
          }`}
        >
          Have questions or want to learn more? Fill out the form and our team
          will get back to you soon.
        </p>
        {submitted ? (
          <div
            className={`rounded-2xl shadow-md p-8 text-center font-semibold ${
              isDark
                ? "bg-[#1b0f20]/80 text-[#e9e7ee]"
                : "bg-white/80 text-[#2d123a]"
            }`}
          >
            Thank you for reaching out! We'll get back to you soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`rounded-2xl shadow-md p-8 flex flex-col gap-6 ${
              isDark ? "bg-[#1b0f20]/80" : "bg-white/80"
            }`}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className={`px-5 py-4 rounded-lg border focus:ring-2 outline-none text-lg transition-all ${
                isDark
                  ? "border-[#b76be0]/30 bg-[#2d1129]/50 text-[#e9e7ee] focus:border-[#b76be0] focus:ring-[#b76be0]/20 placeholder-[#e9e7ee]/50"
                  : "border-[#9d3ecb]/20 bg-white/90 text-[#2d123a] focus:border-[#9d3ecb] focus:ring-[#9d3ecb]/20"
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className={`px-5 py-4 rounded-lg border focus:ring-2 outline-none text-lg transition-all ${
                isDark
                  ? "border-[#b76be0]/30 bg-[#2d1129]/50 text-[#e9e7ee] focus:border-[#b76be0] focus:ring-[#b76be0]/20 placeholder-[#e9e7ee]/50"
                  : "border-[#9d3ecb]/20 bg-white/90 text-[#2d123a] focus:border-[#9d3ecb] focus:ring-[#9d3ecb]/20"
              }`}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className={`px-5 py-4 rounded-lg border focus:ring-2 outline-none text-lg transition-all resize-none ${
                isDark
                  ? "border-[#b76be0]/30 bg-[#2d1129]/50 text-[#e9e7ee] focus:border-[#b76be0] focus:ring-[#b76be0]/20 placeholder-[#e9e7ee]/50"
                  : "border-[#9d3ecb]/20 bg-white/90 text-[#2d123a] focus:border-[#9d3ecb] focus:ring-[#9d3ecb]/20"
              }`}
            />
            <button
              type="submit"
              className={`font-bold py-4 rounded-lg text-lg shadow-md transition-all ${
                isDark
                  ? "bg-[#612D60] text-white hover:bg-[#a55bc8]"
                  : "bg-[#5e255dff] text-white hover:opacity-90"
              }`}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
