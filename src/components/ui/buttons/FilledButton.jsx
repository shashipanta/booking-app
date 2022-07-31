import "./filledButton.css"

function FilledButton(props) {
    return (
        <button className="filledBtn">{props.btnName}</button>
    )
}

export default FilledButton;