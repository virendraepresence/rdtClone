import React, { useRef, useState } from "react";

function Form() {
  const inputRef = useRef("");

  //inputRef={current:""}

  function printText(e) {
    console.log("refis", inputRef);
    console.log("Value in Input is", inputRef.current.value);
  }

  return (
    <>
      <input type="text" ref={inputRef} placeholder="Some Text" />
      <button onClick={printText}>Print Text</button>
    </>
  );
}

export default Form;
