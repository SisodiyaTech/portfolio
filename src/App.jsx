import About from "./sections/About"
import Contacts from "./sections/Contacts"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Process from "./sections/Process"
import Projects from "./sections/Projects"
import Services from "./sections/Services"



function App() {
  
  return (
    <>
      <div>
          <Navbar />
          <Hero />
          <Services />
          <Projects />
          <About />
          <Process />
          <Contacts />
      </div>
    </>
  )
}

export default App
