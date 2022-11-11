import React from "react";

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
    <div className="card bg-base-300 text-primary-content">
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
    </div>
  );
};

export default OtherProject;
