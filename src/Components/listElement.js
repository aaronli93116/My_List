import React from "react";

const ListElement = props => {
  return (
    <div>
      <h2>{props.ele.title}</h2>
      <img src={props.ele.img} alt={props.ele.id} />
    </div>
  );
};

export default ListElement;
