import "./outlineButton.css";

const OutlineButton = (props) => {
  return (
    <>
      <button className="outline">{props.btnName}</button>
    </>
  );
};

export default OutlineButton;
