import { useEffect, useState } from "react";
import "./project.module.css";

type Props = {
  name: string;
  summary: string;
  image: string;
  link: string;
  github: string;
  index: number;
};

const Project = ({ index, image, summary, name }: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(1024);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div className="my-6">
      {
        // index % 2 === 0 && windowWidth > 1024 ?

        <div className="flex gap-4 lg:px-24">
          <img
            className="w-full object-contain rounded-2xl"
            src={image}
            alt=""
          />
          <div className="stats shadow w-full">
            <div className="stat">
              <div className="stat-value">{name}</div>
              <div className="stat-title">Total Page Views</div>
              <div className="badge badge-primary">primary</div>
              <div className="">{summary}</div>
            </div>
          </div>
        </div>
        //  : (
        //   <div className="flex justify-between lg:px-24">
        //     <div className="stats shadow w-full lg:w-1/2">
        //       <div className="stat">
        //         <div className="stat-title">Total Page Views</div>
        //         <div className="stat-value">89,400</div>
        //         <div className="stat-desc">21% more than last month</div>
        //       </div>
        //     </div>
        //     <img className="w-full lg:w-1/2" src={image} alt="Project Picture" />
        //   </div>
        // )
      }
    </div>
  );
};

export default Project;
