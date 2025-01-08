import { useState ,useEffect} from 'react';
import './header.css';
function Header() {
    const [show,setShow] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    useEffect(() => {
        if(theme === 'light') {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    },[theme]);
    return (
        <header className='flex'>
            <button className='menu icon-menu flex' onClick={() => setShow(!show)}>
            </button>
            <div/>
            <nav>
                <ul className='flex'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <button className='mode' onClick={() => {
                localStorage.setItem("theme",theme === "dark" ? "light" : "dark");
                setTheme(localStorage.getItem("theme"));
            }}>
                <span className="icon-moon-stroke"></span>
            </button>
            {show && <div className='fixed'>
                <ul className='model'>
                    <li> 
                        <button className="icon-x" onClick={() => setShow(false)}/>
                    </li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>}
        </header>
    )
}
export default Header;