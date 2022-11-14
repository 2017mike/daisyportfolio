import { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import React from "react";
import FeaturedProject from "../components/FeaturedProject";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import OtherProject from "../components/OtherProject";

import "../styles/globals.css";

import info from "../info";

export const InfoContext = React.createContext(info);

const MyApp = () => {
  return (
    <>
      <InfoContext.Provider value={info}>
        <Navbar />

        <Hero />

        <h2
          id="Projects"
          className="text-4xl font-bold flex justify-center my-4"
        >
          Featured Projects
        </h2>

        {info.featuredProjects.map((project, index) => (
          <FeaturedProject
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

        {info.otherProjects?.length > 0 ? (
          <>
            <h2
              id="Other Projects"
              className="text-4xl font-bold flex justify-center my-4"
            >
              Other Projects
            </h2>
            {/* <div className="flex justify-center"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6  md:mx-16 lg:mx-28">
              {info.otherProjects?.map((project, index) => (
                //need to use bracket instead of dot notation, otherwise TypeScript throws an error.
                <OtherProject
                  key={index}
                  name={project["name"]}
                  github={project["github"]}
                  link={project["link"]}
                  summary={project["summary"]}
                  technologies={project["technologies"]}
                  index={index}
                />
              ))}
            </div>
          </>
        ) : null}
        <Contact></Contact>
        <Footer></Footer>
      </InfoContext.Provider>
    </>
  );
};

export default MyApp;
