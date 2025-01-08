import "./main.css";
import PropTypes from 'prop-types';

function Card({filter}) {
    let projectsArray = [
        {
            category : "react",
            projects : [
            {
                title: "e_planet Shopping",
                img: '/images/planet shopping.png',
                information: "The application is an online plant shopping platform, consisting of three main pages: About Us page Plants Display page Shopping Cart page.",
                github: "https://github.com/Danya-Shwaf/e-plantShopping.git",
                linkedIn: "https://www.linkedin.com/posts/danya-shawaf-b36777304_webdevlopment-react-javascript-activity-7270123283335774209-RBoP?utm_source=share&utm_medium=member_desktop"
            },
        ]},
        {
            category : "javascript",
            projects : [
                {
                    title: "Social Media Web",
                    img: "/images/social media web.png",
                    information: "An open-source social networking platform utilizing APIs to connect users and provide an innovative interactive social experience.",
                    github: "https://github.com/Danya-Shwaf/social_media_web.git",
                    linkedIn: "https://www.linkedin.com/posts/danya-shawaf-b36777304_webdevelopment-frontenddevelopment-tailwindcss-activity-7251633110453297155-5nvN?utm_source=share&utm_medium=member_desktop"
                },
                {
                    title: "City Prayer Times",
                    img: "/images/prayer time cities.png",
                    information: "A web applications that displays prayer times based on the selected city using a prayer times API",
                    github: "https://github.com/Danya-Shwaf/city_prayer_times.git",
                    linkedIn: "https://www.linkedin.com/posts/danya-shawaf-b36777304_webdevelopment-frontenddevelopment-tailwindcss-activity-72516"
                },
                {
                    title: "Contact Form",
                    img: "/images/contact form.png",
                    information: "The Contact Form project is an interactive form built with HTML, CSS, and JavaScript to collect user information. It allows users to easily submit their name, email, and message.",
                    github:"https://github.com/Danya-Shwaf/Danya-Shwaf.github.io/tree/main/contact-form",
                    linkedIn: ""
                }
            ]
        },
        {
            category : "HTML && CSS",
            projects : [{
            title: "Telegram Page",
            img: "/images/tele page.png",
            information: "The Tele-Page project is a static webpage built using HTML and Tailwind CSS. It features a clean and organized design.The layout is fully responsive, ensuring compatibility across various screen sizes.",
            github: "https://github.com/Danya-Shwaf/Danya-Shwaf.github.io/tree/main/Tele-page",
            linkedIn: ""
            },
            {
                title: "Template One",
                img: "/images/template one.png",
                information: "The Template-One project is a static webpage built with HTML and CSS. It features a clean, responsive design, ideal for personal or business websites.",
                github: "https://github.com/Danya-Shwaf/Danya-Shwaf.github.io/tree/main/Template-One",
                linkedIn: ""
            },
            {
                title: "Template Two",
                img: "/images/template two.png",
                information: "The Template-Two project is a static webpage built with HTML and CSS. It offers a simple, elegant, and responsive design, suitable for personal or business websites.",
                github: "https://github.com/Danya-Shwaf/Danya-Shwaf.github.io/tree/main/Template-Two",
                linkedIn: ""
            },
            ]
        },
    ];

let displayedProjects = [];
    
    if (filter === "all") {
        // Get all projects from all categories
        projectsArray.forEach(category => {
            displayedProjects = [...displayedProjects, ...category.projects];
        });
    } else {
        // Get projects from specific category
        const categoryProjects = projectsArray.find(item => item.category === filter);
        displayedProjects = categoryProjects ? categoryProjects.projects : [];
    }
    return (
        <section className="right_section">
            <div className="card_container">
                {displayedProjects.map((project,index) => (
                <div className="card" key={index}>
                    <img src={project.img} alt={project.title} />
                    <div className="box">
                        <h3>{project.title}</h3>
                        <p>{project.information}</p>
                        <hr/>
                        <ul className="links">
                            {/* <li><a href="" className="icon-link"></a></li> */}
                            <li><a href={project.github} className="icon-github"></a></li>
                            <li><a href={project.linkedIn} className="icon-linkedin"></a></li>
                        </ul>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}

Card.propTypes = {
    filter: PropTypes.string.isRequired
};

export default Card;
