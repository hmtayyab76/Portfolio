import React from "react";

function SingleProject({ title, image, languages, description }) {
  return (
    <section
      className="w-50 flex justify-around flex-col p-5 m-5 border-solid border-2 border-white rounded-lg overflow-hidden  shadow-lg bord"
      style={{ width: "450px" }}
    >
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1"
      />
      <div className="m-1 sm:m-5">
        <h5 className="text-2xl font-bold  text-white mb-2">{title}</h5>
        <div className="description-container mb-4 overflow-hidden">
          <p className=" text-1/2xl sm:text-1xl text-orange-500  m-2">
            {description}
          </p>
        </div>
        <p className="text-3xl my-2 text-white">Stack</p>
        <p className="text-2xl my-2 text-slate-200 pl-5 ">{languages}</p>
      </div>
      <div className="flex justify-around mt-4">
        <button className="button">Visit</button>
        <button className="button">Code</button>
      </div>
    </section>
  );
}

export default SingleProject;
