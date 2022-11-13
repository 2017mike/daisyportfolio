import React, { useContext, useState, useEffect } from "react";
import { InfoContext } from "../../pages/_app";

interface Props {}

const Navbar = (props: Props) => {
  const info = useContext(InfoContext);

  const [showNavState, setShowNavState] = useState(true);

  useEffect(() => {
    var lastScrollTop = 0;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener(
      "scroll",
      function () {
        // or window.addEventListener("scroll"....
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
          // downscroll code
          console.log("down");
          setShowNavState(false);
        } else {
          // upscroll code
          console.log("up");
          setShowNavState(true);
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      },
      false
    );
  }, []);
  return showNavState ? (
    <div className="navbar bg-base-100 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {info.sections.map((section) => (
              <li key={section}>
                <a href={`#${section}`}>{section}</a>
              </li>
            ))}
            <li>
              <a
                target="_blank"
                href="https://github.com/2017mike/zapApp/files/9968907/Michael_Scharf_Resume.pdf"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <a href="" className="btn btn-ghost normal-case text-xl text-accent">
          {info.name}
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {info.sections.map((section) => (
            <li key={section}>
              <a href={`#${section}`}>{section}</a>
            </li>
          ))}
          <li>
            <a
              target="_blank"
              href="https://github.com/2017mike/fetchExample/blob/92544679b8ccf65cac72bee3daf008a17a891e5f/Michael_Scharf_Resume.pdf"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  ) : null;
};

export default Navbar;
