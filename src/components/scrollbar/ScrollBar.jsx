import "./scrollBar.css";

const ScrollBar = (props) => {
    const listItems = props.scrollListItems.map((
        singleItem) => {
            return (
                <li key={singleItem} className="scrollText">{singleItem}</li>
            )
        }
    );
    return (
        <>
        <span className="movingInfo">
            <ul className="infoWindow">
                {listItems}
                {/* <li className="scrollText">homes</li>
                <li className="scrollText">apartments</li>
                <li className="scrollText">vilas</li>
                <li className="scrollText">condo hotels</li>
                <li className="scrollText">vacation homes</li>
                <li className="scrollText">cottages</li>
                <li className="scrollText">homes</li> */}
            </ul>
        </span>
        </>
    )
}

export default ScrollBar;