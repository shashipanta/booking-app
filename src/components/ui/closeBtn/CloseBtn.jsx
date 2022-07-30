import { useState } from "react";
import "./closeBtn.css";


const CloseBtn = (props)=> {

    function handleShowContainer() {
        // here we invoke the callback with the new value
        props.liftState(prev => !prev);
    }

    return (
        <>
        <span className="close-btn" onClick={handleShowContainer}>
            <svg class="bk-icon -streamline-close" height="24" role="presentation" width="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.31 12l6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"></path></svg>
        </span>
        </>
    )
}

export default CloseBtn;