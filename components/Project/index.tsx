import React from "react";

type Props = {
  name: string;
  summary: string;
  image: string;
  link: string;
  github: string;
  index: number;
};

const Project = ({ index, image }: Props) => {
  return (
    <>
      {index % 2 === 0 ? (
        <div className="flex justify-between lg:px-24">
          <img src={image} alt="" />
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Total Page Views</div>
              <div className="stat-value">89,400</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between lg:px-24">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Total Page Views</div>
              <div className="stat-value">89,400</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
          <img src={image} alt="" />
        </div>
      )}
    </>
  );
};

export default Project;
