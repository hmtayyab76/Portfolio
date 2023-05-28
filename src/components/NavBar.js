import React from "react";

function NavBar() {
  const NavLinksDisplay = () => {
    let NavLinks = document.getElementById("navbar-sticky");
    NavLinks.style.display === "none"
      ? (NavLinks.style.display = "flex")
      : (NavLinks.style.display = "none");
  };
  return (
    <>
      <nav className="sticky w-full z-20 nav-bg opacity text-white top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#123" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Portfolio
            </span>
          </a>
          <div className="flex md:order-2">
            <a href="https://github.com/hmtayyab76" className="p-2 text-center">
              <i className="fa-brands fa-github text-2xl text-white hover:text-orange-600"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hafiz-muhammad-tayyab-037352248/"
              className="p-2 text-center"
            >
              <i className="fa-brands fa-linkedin text-2xl text-white hover:text-orange-600"></i>
            </a>
            <a
              href="https://twitter.com/hmtayyab76"
              className="p-2 text-center"
            >
              <i className="fa-brands fa-twitter text-2xl text-white hover:text-orange-600"></i>
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={NavLinksDisplay}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between sm:flex-col hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              id="NavLinks-1"
              className="flex  p-2 md:p-0 mt-1  font-medium border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 "
            >
              <li>
                <a
                  href="#aboutus"
                  className="block py-2 pl-3 pr-4 text-slate-200  rounded  md:p-0 hover:text-orange-600"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 pl-3 pr-4 text-slate-200  rounded  md:p-0 hover:text-orange-600"
                >
                  Projects
                </a>
              </li>
              {/* <li>
                <a
                  href="123"
                  className="block py-2 pl-3 pr-4 text-slate-200  rounded  md:p-0 hover:text-orange-600"
                >
                  Skills
                </a>
              </li> */}
              <li>
                <a
                  href="#contact"
                  className="block py-2 pl-3 pr-4 text-slate-200  rounded  md:p-0 hover:text-orange-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
