import React, { useContext, useState, useEffect } from "react";
import { InfoContext } from "../../pages/_app";
import { motion, AnimatePresence, useScroll } from "framer-motion";
interface Props {}

const Navbar = (props: Props) => {
  const info = useContext(InfoContext);
  const { scrollY }: any = useScroll();
  // had to specify as any, best fix for right now

  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
      console.log("visible");
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
      console.log("hidden");
    }
  }

  const variants = {
    /** this is the "visible" key and it's respective style object **/
    visible: { opacity: 1, zIndex: 50 },
    /** this is the "hidden" key and it's respective style object **/
    hidden: { opacity: 0, zIndex: 50 },
  };

  useEffect(() => {
    return scrollY.onChange(() => update());

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  }, []);
  return (
    <motion.div
      variants={variants}
      /** it's right here that we match our boolean state with these variant keys **/
      animate={hidden ? "hidden" : "visible"}
      /** I'm also going to add a custom easing curve and duration for the animation **/
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className="navbar fixed bg-base-100 shadow-4xl"
    >
      {/* <div className=" "> */}
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
      {/* </div> */}
    </motion.div>
  );
};

export default Navbar;
