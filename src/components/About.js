import React from "react";
import profile from "../assets/profile.jpg";
import aboutme from "../assets/about-me.svg";

function About() {
  return (
    <div>
      <div className="h-full max-w-screen-xl px-5 mx-auto flex flex-col md:flex-row justify-between my-6 items-center  py-12 md:py-14">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl animated-text-1">
            <span className="txt-1">Hello, I'm</span>
          </h1>
          <p className="text-2xl py-4 sm:text-4xl md:text-5xl animated-text-2">
            <span
              className="text-white "
              style={{ fontFamily: "Lobster', cursive" }}
            >
              Hafiz Muhammad Tayyab
            </span>
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl text-slate-400 animated-text-2">
            Front-End Developer
          </p>
        </div>
        <div className="profile-img-div p-5 md:p-0 w-60 md:w-80 drop-shadow-1xl hover:drop-shadow-2xl">
          <img src={profile} className="profile-img  " alt="Profile Pic" />
        </div>
      </div>
      <div
        id="aboutus"
        className="about-me flex flex-col md:flex-row justify-around py-0 md:py-14 items-center max-w-screen-xl mx-auto"
      >
        <div className="w-full md:w-2/4 p-7">
          <img alt="About Me" src={aboutme}></img>
        </div>
        <div className="w-full md:w-3/4 p-7">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="txt-1">About me</span>
          </h1>
          <p className="py-4 text-2xl md:text-3xl">Get to know</p>
          <p className="text-lg md:text-1xl text-justify text-slate-300">
            "I'm <span className="clr-3">Hafiz Muhammad Tayyab,</span> a
            Software Engineer who embarked on my journey in website design and
            development in 2021. Over the past two years, I have gained valuable
            experience in creating clean, elegant, and user-friendly websites
            for clients around the world. My skill set includes proficiency in
            <span className="clr-3"> HTML, CSS, JavaScript, React JS</span> and
            various web frameworks, and I am always eager to learn new
            technologies to enhance my work. I take pride in delivering
            high-quality output that exceeds clients' expectations, and I am
            always happy to assist with website changes, content updates, bug
            fixes, and design modifications. If you are seeking a passionate and
            experienced web developer who can bring your ideas to life."
          </p>
          <div className="mt-5">
            <a href="123" className="button">
              Find More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
