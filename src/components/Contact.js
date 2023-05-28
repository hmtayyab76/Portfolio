import React from "react";
import "../App.css";
import letterImg from "../assets/letter.svg";
function Contact() {
  return (
    <div>
      <div
        id="contact"
        className="about-me flex flex-col md:flex-row justify-around py-0 md:py-14 items-center max-w-screen-xl mx-auto"
      >
        <div className="w-full md:w-2/5 p-7">
          <img alt="About Me" src={letterImg}></img>
        </div>
        <div className="max-w-md md:w-2/4 mx-auto my-8 bg-light-accent p-10 rounded-md shadow-sm  div-bg ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
              <span className="ctxt-1">Contact</span>
            </h1>
            <p className="text-gray-700 mb-6 font-bold">
              Fill up the form below to send a message.
            </p>
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Your Name <span>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></input>
              </div>
              <div className="flex flex-wrap mb-6 ">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Your Email <span>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="appearance-none border valid:border-orange-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></input>
              </div>
              <div className="flex flex-wrap mb-6">
                <label
                  htmlFor="number"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="+92-XZY-YYYYYYY "
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></input>
              </div>

              <div className="flex flex-wrap mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter your message"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <button type="submit" className="button w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
