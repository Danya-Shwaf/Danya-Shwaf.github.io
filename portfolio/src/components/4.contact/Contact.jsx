import "./contact.css";
import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";
import doneAnimation from '../../../public/animation/done.json';
import emailAnimation from "../../../public/animation/email.json";
function Contact() {
    const [state, handleSubmit] = useForm("meoozqep");
    return (
    <section className="contact_us" id="contact">
        <h1><span className="icon-contact">
        </span>Contact me</h1>
        <p>Contact Me For More Information</p>
        <div className="contact_container">
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label>Email Address:</label>
                    <input type="email" placeholder="Email Address" name="email" autoComplete="off"/>
                    <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea required name="message" id="" placeholder="Your Message"></textarea>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <div className="submit">
                    <button type="submit" disabled={state.submitting}>
                        {state.submitting ? "Submitting..." :"Submit"}
                    </button>
                </div>
                {state.succeeded ? <h2 style={{marginTop :"1.7rem" , textAlign : "center" ,fontSize : "16px", display : "flex" , alignItems : "center"}}>
                    <Lottie animationData={doneAnimation} style={{height: "60px" , margin : "0px", padding : "0" }}  loop={false} />
                    Your message has been sent successfully.</h2> : <h2></h2>}
            </form>
            <div className="animation">
                <Lottie animationData={emailAnimation} />
            </div>
        </div>
    </section>
);
}
export default Contact;
