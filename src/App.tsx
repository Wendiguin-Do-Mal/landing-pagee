import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Hero from './components/Hero'
import Tickets from './components/Tickets'
import About from './components/About'
import Schedule from './components/Schedule'
import Location from './components/Location'
import Contact from './components/Contact'
import "./animations.css"

function App() {
 

  return( 
  < >
   <div style={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          width:"100vw",
          gap: "2rem",
          backgroundColor: "#00bfff",

              }}>
   <Header />
   <Hero/>
   <About/>
   <Tickets/>
   <Schedule/>
   <Location/>
   <Form/>
   <Contact/>
   </div>

  </>)
}

export default App
