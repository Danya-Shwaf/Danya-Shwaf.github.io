import "./hero.css";
import Lottie from "lottie-react";
import girlAnimation from "../../../public/animation/girl.json";
//import girl_blueAnimation from "../../../public/animation/blue_girl.json";
function Hero() {


    return (
    <section className="hero_container flex" id="about">
        <div className="left_section">
            <h1>Front End Developer</h1>
            <p>I’m Danya, a front-end developer passionate about creating modern and responsive websites. I focus on writing clean code, improving user experience, and crafting visually appealing designs.

I believe creativity starts with a simple idea and evolves into an inspiring experience.</p>
            <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100069862957911&mibextid=ZbWKwL"  className="icon-facebook2"></a></li>
                <li><a href="https://github.com/Danya-Shwaf" className="icon-github"></a></li>
                <li><a href="https://www.instagram.com/dania_shawaf?igsh=NndhNnR4MzBuaDBn"  className="icon-instagram"></a></li>
                <li><a href="https://www.linkedin.com/in/danya-shawaf-b36777304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icon-linkedin"></a></li>
            </ul>
        </div>
        <div className="right_section">
            <Lottie 
            animationData={girlAnimation}
            onLoadedImages={ () => {
                girlAnimation.current.setSpeed(5);
            }}
            /> 
        </div>
    </section>
)}
export default Hero;
