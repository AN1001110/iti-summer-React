import { useState } from "react";
import OutputText from "../OutputText/OutputText";

export default function InputField() {
  const [text, setText] = useState("");
  return (
    <>
      <div className=" container d-flex w-100 vh-100 align-items-center justify-content-center flex-column gap-4 bg-success ">
        <div className="input-group mb-3  d-flex  align-items-center justify-content-center flex-column gap-2 ">
          <label className="text-white fw-bold" htmlFor="text">
            {" "}
            enter your text to print it in real time :{" "}
          </label>
          <input
            id="text"
            onInput={(e) => setText(e.target.value)}
            type="text"
            className="form-control w-100"
            aria-label="Text input with checkbox"
          />
        </div>

        <OutputText text={text} />
      </div>
    </>
  );
}
