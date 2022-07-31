import OutlineButton from "../ui/buttons/OutlineButton";
import Input from "../ui/input/Input";
// import Input from "../../components/mail/MailList";
import "./mailList.css";

const MailList = () => {
    return (
        <>
        <div className="mail__container">
            <div className="mail__content">
                <h1 className="mail__title">Save time, save money!</h1>
                <span className="mail__subTitle">Sign up and we'll send the best deals to you.</span>
                <div className="cta">
                    <Input />
                    <OutlineButton btnName="Subscribe"/>
                </div>
                <div className="checkBox">
                    <input type="checkbox" name="sendLink" id="sendLink" />
                    <span className="checkboxMsg"> Send me link to the FREE booking.com app !</span>
                </div>
            </div>
        </div>

        </>
    )
};

export default MailList;
