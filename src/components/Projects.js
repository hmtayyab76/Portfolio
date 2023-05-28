import React from "react";
import SingleProject from "./SingleProject";
import Project_Image_1 from "../assets/p1.png";
import Project_Image_2 from "../assets/p2.png";
import Project_Image_4 from "../assets/p4.png";

import "../App.css";
function Projects() {
  return (
    <div id="projects" className="max-w-screen-xl mx-auto p-4">
      <div className="w-full my-10 text-4xl sm:text-5xl font-bold text-orange-600">
        My Projects
      </div>
      <div className="flex flex-wrap justify-around max-w-screen-xl div-bg items-center mx-auto p-4">
        <SingleProject
          title={"QuickCart"}
          image={Project_Image_1}
          languages={"#JavaScript || #React"}
          description={
            "The front-end of an add-to-cart project with payment integration using React would typically involve creating a user-friendly interface that allows users to add items to their cart and checkout using various payment methods. This would require creating a shopping cart component that displays items in the cart, calculates the total cost, and provides options for removing or modifying items"
          }
        />

        <SingleProject
          title={"ShopEZ"}
          image={Project_Image_2}
          languages={"#JavaScript || #React"}
          description={
            "Creating the front-end of a shopping website with React JS and other technologies involves using a variety of tools and techniques to build an engaging user experience.Creating a successful shopping website requires careful consideration of user needs and preferences, as well as attention to performance, accessibility"
          }
        />
      </div>
    </div>
  );
}

export default Projects;
