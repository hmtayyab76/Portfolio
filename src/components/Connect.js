import React from "react";
import "../App.css";
function Connect() {
  return (
    <div className="max-w-screen-xl mx-auto my-10 p-4 div-bg">
      <h1 className="text-4xl sm:text-5xl text-white ">Let's Connect</h1>
      <p className=" text-3xl sm:text-4xl my-5 text-white ">My Social</p>
      <div className="flex flex-wrap justify-around items-center my-5 sm:my-10">
        <div className="button flex justify-between items-center  mx-2 my-5 w-36 sm:w-72 md:w-80">
          <p>Twitter</p>
          <a href="https://twitter.com/hmtayyab76" className="p-2 text-center">
            <i className="fa-brands fa-twitter text-2xl text-white "></i>
          </a>
        </div>
        <div className="button flex justify-between items-center  mx-2 my-5 w-36 sm:w-72 md:w-80 w">
          <p>Facebook</p>
          <a
            href="https://www.linkedin.com/in/hafiz-muhammad-tayyab-037352248/"
            className="p-2 text-center"
          >
            <i className="fa-brands fa-facebook text-2xl text-white "></i>
          </a>
        </div>
        <div className="button flex justify-between items-center  mx-2 my-5 w-36 sm:w-72 md:w-80">
          <p>Instagram</p>
          <a
            href="https://www.instagram.com/mycode40/"
            className="p-2 text-center"
          >
            <i className="fa-brands fa-instagram text-2xl text-white "></i>
          </a>
        </div>
        <div className="button flex justify-between items-center  mx-2 my-5 w-36 sm:w-72 md:w-80">
          <p>Git Hub</p>
          <a href="https://github.com/hmtayyab76" className="p-2 text-center">
            <i className="fa-brands fa-github text-2xl text-white "></i>
          </a>
        </div>
        <div className="button flex justify-between items-center  mx-2 my-5 w-36 sm:w-72 md:w-80">
          <p>Linkedin</p>
          <a
            href="https://www.linkedin.com/in/hafiz-muhammad-tayyab-037352248/"
            className="p-2 text-center"
          >
            <i className="fa-brands fa-linkedin text-2xl text-white "></i>
          </a>
        </div>
        <div className="button flex justify-between items-center  mx-2 my-5 w-36 sm:w-72 md:w-80">
          <p>Telegram</p>
          <a href="https://telegram.org/dl" className="p-2 text-center">
            <i className="fa-brands fa-telegram text-2xl text-white"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Connect;
