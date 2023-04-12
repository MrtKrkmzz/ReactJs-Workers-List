import React from "react";

const Card = (props) => {
  return <div className="bg-white rounded-lg p-5 mt-10">{props.children}</div>;
};

export default Card;
