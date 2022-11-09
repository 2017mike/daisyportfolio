import React, { useContext } from "react";
import { InfoContext } from "../../pages/_app";

interface Props {}

const sections = ["About", "Projects", "Contact"];

const Navbar = (props: Props) => {
  const info = useContext(InfoContext);

  return (
    <div className="navbar bg-base-100">
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
            {sections.map((section) => (
              <li key={section}>
                <a href={`#${section}`}>{section}</a>
              </li>
            ))}
            <li>
              <a
                target="_blank"
                href="https://github.com/2017mike/zapApp/files/9968907/Michael_Scharf_Resume.pdf"
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
          {sections.map((section) => (
            <li key={section}>
              <a href={`#${section}`}>{section}</a>
            </li>
          ))}
          <li>
            <a
              target="_blank"
              href="https://github.com/2017mike/fetchExample/blob/92544679b8ccf65cac72bee3daf008a17a891e5f/Michael_Scharf_Resume.pdf"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
