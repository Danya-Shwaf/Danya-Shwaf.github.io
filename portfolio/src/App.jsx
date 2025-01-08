import { useEffect  , useState} from 'react';
import Header from'./components/1.headers/Header';
import Hero from './components/2.hero/Hero';
import Main from './components/3.main/Main';
import Contact from './components/4.contact/Contact';
import Footer from './components/5.footer/Footer';
import './index.css';


function App() {
  let [showBTN , setShowBTN] = useState(false);
    useEffect( ()=> {
      window.addEventListener("scroll" , ()=> {
        if(window.scrollY > 300) {
          setShowBTN(true);
        } else {
          setShowBTN(false);
        }
      })
    },[]);

  return (
    <div className="container" id='up'>
      <Header />
      <Hero />
      <div className="line" />
      <Main />
      <div className="line" />
      <Contact />
      <div className="line" />
      <Footer />
      <a href='#up' style={{opacity : showBTN ? 1 :0 , transition: "0.4s"}}>
        <button className="icon-arrow-thin-up"></button>
      </a>
    </div>
  );
}

export default App
