import { useEffect, useState } from "react";
import "./project.module.css";

type Props = {
  name: string;
  summary: string;
  image: string;
  link: string;
  github: string;
  index: number;
  technologies: string[];
};

const Project = ({
  index,
  image,
  summary,
  name,
  link,
  github,
  technologies,
}: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(1024);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <>
      {(index % 2 === 0 && windowWidth > 1024) || windowWidth < 1024 ? (
        <div className="flex justify-center flex-wrap my-8 px-6 lg:gap-6">
          <img
            className="object-contain rounded-2xl sm:w-full lg:w-4/12"
            src={image}
            alt=""
          />
          <div className="shadow-lg flex flex-col rounded-2xl justify-around gap-8 p-6 bg-base-300 sm:w-full lg:w-6/12 lg:gap-2  ">
            <h3 className="stat-value">{name}</h3>
            <div className="flex gap-2 flex-wrap">
              {technologies.map((tech, i) => {
                //let's make the badges different colors to add some pizzazz
                const badgeColors = [
                  "badge-primary",
                  "badge-secondary",
                  "badge-accent",
                  "badge-ghost",
                  "badge-primary",
                  "badge-secondary",
                  "badge-accent",
                  "badge-ghost",
                  "badge-primary",
                  "badge-secondary",
                  "badge-accent",
                  "badge-ghost",
                ];

                return (
                  <div
                    key={i}
                    className={`badge ${badgeColors[i]} text-xl p-3`}
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
            <div className="">{summary}</div>
            <div className="flex gap-2">
              <a className="btn btn-primary w-1/5" href={link} target="_blank">
                Link
              </a>
              <a className="btn btn w-1/4" href={github} target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-wrap my-8 px-6 lg:gap-6">
          <div className="shadow-lg flex flex-col rounded-2xl justify-around gap-8 p-6 bg-base-300 sm:w-full lg:w-6/12 lg:gap-2  ">
            <h3 className="stat-value">{name}</h3>
            <div className="flex gap-2 flex-wrap">
              {technologies.map((tech, i) => {
                //let's make the badges different colors to add some pizzazz
                const badgeColors = [
                  "badge-primary",
                  "badge-secondary",
                  "badge-accent",
                  "badge-ghost",
                  "badge-primary",
                  "badge-secondary",
                  "badge-accent",
                  "badge-ghost",
                  "badge-primary",
                  "badge-secondary",
                  "badge-accent",
                  "badge-ghost",
                ];

                return (
                  <div
                    key={i}
                    className={`badge ${badgeColors[i]} text-xl p-3`}
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
            <div className="">{summary}</div>
            <div className="flex gap-2">
              <a className="btn btn-primary w-1/5" href={link} target="_blank">
                Link
              </a>
              <a className="btn btn w-1/4" href={github} target="_blank">
                Github
              </a>
            </div>
          </div>
          <img
            className="object-contain rounded-2xl sm:w-full lg:w-4/12"
            src={image}
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default Project;
