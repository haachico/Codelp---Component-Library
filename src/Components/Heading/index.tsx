import React, { ReactNode } from "react";

type HeadingProps = {
  tag: string;
  children: ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ tag, children }) => {
  return (
    <div>
      {tag === "h1" ? (
        <h1>{children}</h1>
      ) : tag === "h2" ? (
        <h2>{children}</h2>
      ) : tag === "h3" ? (
        <h3>{children}</h3>
      ) : tag === "h4" ? (
        <h4>{children}</h4>
      ) : tag === "h5" ? (
        <h5>{children}</h5>
      ) : tag === "h6" ? (
        <h6>{children}</h6>
      ) : null}
    </div>
  );
};

export default Heading;
