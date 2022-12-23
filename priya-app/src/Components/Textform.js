import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Your text has been converted to UpperCase");
  };
  const handleOnChange = (event) => {
    // console.log("OnChange")
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("success", "Your text has been copied");
  };
  const lowerCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("success", "Your text has been converted to LowerCase");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success", "Extra spaces removed!");
  };
  const clear = () => {
    setText("");
    props.showAlert("success", "Your text has been clear");
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1
          className="mb-4"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          {props.heading}
        </h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#198754" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length == 0}
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length == 0}
          className="btn btn-primary mx-2 my-3"
          onClick={lowerCase}
        >
          Convert To LowerCase
        </button>
        <button
          disabled={text.length == 0}
          className="btn btn-primary mx-2 my-3"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length == 0}
          className="btn btn-primary mx-2 my-3"
          onClick={handleCopy}
        >
          CopyText
        </button>
        <button
          disabled={text.length == 0}
          className="btn btn-primary mx-2 my-3"
          onClick={clear}
        >
          Clear
        </button>
      </div>
      <div
        className="container my-4 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Character
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Previews"}</p>
      </div>
    </>
  );
}
