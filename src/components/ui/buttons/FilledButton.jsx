import "./filledButton.css";

function FilledButton(props) {
  let btnClass = "filledBtn";
  if (props.btnType == "primary") {
    btnClass = "filledBtn-primary";
  }

  return <button className={btnClass}>{props.btnName}</button>;
}

export default FilledButton;
