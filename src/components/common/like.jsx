import React from "react";

//Input: liked:boolean
//Output: onClick
const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer", color: "red" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
