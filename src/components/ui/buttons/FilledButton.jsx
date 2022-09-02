import "./filledButton.css";

function FilledButton(props) {
  console.log(props.btnType == "primary");
  let btnClass = "filledBtn";
  if (props.btnType == "primary") {
    btnClass = "filledBtn-primary";
  }

  console.log(btnClass);

  return <button className={btnClass}>{props.btnName}</button>;
}

export default FilledButton;
