import React, { useContext } from "react";
import { InfoContext } from "../../pages/_app";
import Navbar from "../Navbar";

interface Props {}

const Hero = () => {
  const info = useContext(InfoContext);
  return (
    <>
      <div
        id="About"
        className="hero bg-base-200 min-h-screen z-0  px-4 lg:px-24 xl:px-44"
      >
        <div className="hero bg-base-200">
          <div className="hero-content mb-12 flex-col items-center lg:mt-28 lg:flex-row-reverse gap-4">
            <img
              src={info.headshot}
              className="rounded-lg object-contain mt-16 w-9/12 sm:w-7/12  md:w-4/12 lg:mt-0"
            />
            <div>
              <h1 className="text-5xl font-bold text-accent">
                Hi, I&apos;m {info.name}
              </h1>
              <p className="py-6">{info.summary}</p>
              <a href="#Contact" className="btn btn-primary">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
