import Card from "./Card";
import "./main.css";
import { useState } from 'react';
function Main() {

    const [currentFilter, setCurrentFilter] = useState("all");
    
    let displayProjects = (category) => {
        setCurrentFilter(category);
        let activeButton = document.querySelector(".active");
        activeButton.classList.remove("active");
        let clickedButton = event.target;
        console.log(clickedButton);
        clickedButton.classList.add("active");
    }
    return (
    <main className="main_container" id="projects">
        <section className="left_section">
            <button onClick={() => displayProjects("all")} className="active">All Projects</button>
            <button onClick={() => displayProjects("HTML && CSS")}>HTML & CSS</button>
            <button onClick={() => displayProjects("javascript")}>Javascript</button>
            <button onClick={() => displayProjects("react")}>React</button>
        </section>
            <Card filter={currentFilter}/>
    </main>
);
}
export default Main;
