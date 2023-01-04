import React from "react";
import "./Spinner.css";
function Spinner(props) {
  return (
    <>
      <div id="loading" style={{ display: props.style }}></div>
    </>
  );
}

export default Spinner;
