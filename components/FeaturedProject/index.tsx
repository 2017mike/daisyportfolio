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

const FeaturedProject = ({
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

    addEventListener("resize", (event) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      {(index % 2 === 0 && windowWidth > 768) || windowWidth < 768 ? (
        <div className="flex justify-center flex-wrap my-8 mx-6 md:gap-6">
          <img
            className="object-cover rounded-2xl w-full sm:w-6/12 md:w-4/12"
            src={image}
            alt=""
          />
          <div className="shadow-md flex flex-col rounded-2xl justify-around gap-8 p-6 bg-base-300 sm:w-6/12 md:w-6/12 md:gap-2  ">
            <a href={link} target="_blank" rel="noreferrer">
              <h3 className="stat-value">{name}</h3>
            </a>
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
            <div className="my-4">{summary}</div>
            <div className="flex gap-2">
              <a
                className="btn btn-primary w-1/5"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
              <a
                className="btn btn w-1/4"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-wrap my-8 mx-6 md:gap-6">
          <div className="shadow-md flex flex-col rounded-2xl justify-around gap-8 p-6 bg-base-300 sm:w-6/12 md:w-6/12 md:gap-2  ">
            <a href={link} target="_blank" rel="noreferrer">
              <h3 className="stat-value">{name}</h3>
            </a>
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
            <div className="my-4">{summary}</div>
            <div className="flex gap-2">
              <a
                className="btn btn-primary w-1/5"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
              <a
                className="btn btn w-1/4"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <img
            className="object-cover rounded-2xl w-full sm:w-6/12 md:w-4/12"
            src={image}
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default FeaturedProject;
