"use client";
import React from "react";

interface HeadingProp {
  title?: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProp> = (props) => {
  const { title, subtitle, center } = props;
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500">{subtitle}</div>
    </div>
  );
};

export default Heading;
