import { useEffect } from "react";

export default function OutputText({ text, password }) {
  useEffect(() => {
    window.localStorage.setItem(
      "auth",
      JSON.stringify({ name: text, password: password })
    );
  }, [text, password]);
  return (
    <>
      <p className="text-white fw-bold ">user name length is : {text.length}</p>
      <p className="text-white fw-bold ">
        password length is : {password.length}
      </p>
      {text.length < 2 && (
        <p className="text-white  bg-danger fw-bold ">
          your text length is too short
        </p>
      )}
      {text.password < 8 && (
        <p className="text-white  bg-danger fw-bold ">
          your password length is short
        </p>
      )}
    </>
  );
}
