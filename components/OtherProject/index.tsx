import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

type Props = {
  name: string;
  summary: string;
  link: string;
  github: string;
  index: number;
  technologies: string[];
};

const OtherProject = ({
  name,
  summary,
  link,
  github,
  index,
  technologies,
}: Props) => {
  return (
    <AnimationOnScroll
      animateOnce
      animateIn="animate__slideInUp"
      className="card bg-base-300"
    >
      {/* <div> */}
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{summary}</p>
        <div className="my-4">
          {technologies.map((tech, index) => (
            <span key={index} className="text-base-content">
              {tech}{" "}
            </span>
          ))}
        </div>
        <div className="card-actions justify-end">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Link
          </a>
          <a href={github} target="_blank" rel="noreferrer" className="btn">
            Github
          </a>
        </div>
      </div>
      {/* </div> */}
    </AnimationOnScroll>
  );
};

export default OtherProject;
