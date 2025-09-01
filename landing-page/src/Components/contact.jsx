import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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
      className="relative w-full py-20 px-12 bg-gradient-to-br from-white via-[#f9f4f9] to-[#f7eaf7] overflow-hidden"
    >
      {/* Decorative blurred circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#9d3ecb]/20 rounded-full blur-3xl opacity-60 z-0" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#5affff]/20 rounded-full blur-3xl opacity-60 z-0" />
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="flex items-center justify-center mb-4">
          <span className="inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
          <span className="uppercase tracking-widest text-xs font-semibold text-[#702c91]">
            Contact
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-[#2d123a] drop-shadow-sm tracking-tight">
          Get in Touch
        </h2>
        <p className="text-lg md:text-2xl text-[#3f3f3f] text-center mb-10 max-w-xl mx-auto">
          Have questions or want to learn more? Fill out the form and our team
          will get back to you soon.
        </p>
        {submitted ? (
          <div className="bg-white/80 rounded-2xl shadow-md p-8 text-center text-[#2d123a] font-semibold">
            Thank you for reaching out! We'll get back to you soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 rounded-2xl shadow-md p-8 flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-5 py-4 rounded-lg border border-[#9d3ecb]/20 focus:border-[#9d3ecb] focus:ring-2 focus:ring-[#9d3ecb]/20 outline-none text-lg text-[#2d123a] bg-white/90 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-5 py-4 rounded-lg border border-[#9d3ecb]/20 focus:border-[#9d3ecb] focus:ring-2 focus:ring-[#9d3ecb]/20 outline-none text-lg text-[#2d123a] bg-white/90 transition-all"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="px-5 py-4 rounded-lg border border-[#9d3ecb]/20 focus:border-[#9d3ecb] focus:ring-2 focus:ring-[#9d3ecb]/20 outline-none text-lg text-[#2d123a] bg-white/90 transition-all resize-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] text-white font-bold py-4 rounded-lg text-lg shadow-md hover:opacity-90 transition-all"
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
