import React from "react";

export const Tweet = (props) => {
  //props.message= 'hello sacoya // DOES NOT WORK'
  console.log(props);
  return (
    <div className="Tweet">
      {/* <p>{props.message}</p> */}
      <div style={{ backgroundColor: props.color, padding: "0px" }}>
        {props.message}
      </div>
    </div>
  );
};
