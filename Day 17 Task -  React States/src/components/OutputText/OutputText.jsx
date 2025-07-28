export default function OutputText({ text }) {
  return (
    <>
      <p className="text-white fw-bold ">{text}</p>
      <p className="text-white fw-bold ">Length is : {text.length}</p>
      {text.length > 10 && (
        <p className="text-white  bg-danger fw-bold ">
          your text length is too long{" "}
        </p>
      )}
    </>
  );
}
