import { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import React from "react";
import Project from "../components/Project";
import Contact from "../components/Contact";

import "../styles/globals.css";

import info from "../info";

export const InfoContext = React.createContext(info);

const MyApp = () => {
  return (
    <>
      <InfoContext.Provider value={info}>
        <Navbar />
        <Hero />
        <h2 className="text-4xl font-bold flex justify-center my-4">
          Projects
        </h2>
        {info.projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            github={project.github}
            link={project.link}
            image={project.image}
            summary={project.summary}
            technologies={project.technologies}
            index={index}
          />
        ))}
        <Contact></Contact>
      </InfoContext.Provider>
    </>
  );
};

export default MyApp;
