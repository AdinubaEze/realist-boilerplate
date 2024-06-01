import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Services from "./Components/Services"
import Properties from "./Components/Properties"
import Agents from "./Components/Agents"
import Clients from "./Components/Clients"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react"

function App() {
  useEffect(()=>{
    Aos.init({
      duration: 500,
      easing: 'ease-in-sine',
    })
  },[])

  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Properties/>
      <Agents />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}

export default App
