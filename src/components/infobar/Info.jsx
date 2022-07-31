import { useState } from "react";
import CloseBtn from "./../ui/closeBtn/CloseBtn";
import Button from "./../ui/buttons/Button";
import "./info.css";
import ScrollBar from "../scrollbar/ScrollBar";


const FindInfo = () => {
    const scrollListItems = ['homes', 'villas', 'condo hotels', 'appartments', 'vacation homes', 'cottages' ];
    const [showContainer, setShowContainer ] = useState(true);

    function handleShowContainer(showContainer) {
        setShowContainer(!showContainer);
    }
    return (
        <>
        {
            showContainer && 
            <div className="findInfoContainer">
                {/* close  */}
                <CloseBtn liftState={handleShowContainer} />

                <div className="infoLeftImg">
                </div>
                <div className="infoBlueContainer">
                    <span>Find </span>
                    {/* Automatically Scrolling content  */}
                    <ScrollBar scrollListItems = {scrollListItems}/>
                    <span>for your next trip.</span>
                    <Button btnName="Discover more" />
                </div>
                <div className="infoRightImg">
                    <img data-src="https://t-cf.bstatic.com/static/img/bh/awareness/campaign/bh_aw_cpg_main_image/b0f5755d0651acbe9d3f3785a874258150b4393b.png"  src="https://t-cf.bstatic.com/static/img/bh/awareness/campaign/bh_aw_cpg_main_image/b0f5755d0651acbe9d3f3785a874258150b4393b.png"></img>
                </div>

            </div>
        }
        </>
    )
}

export default FindInfo;