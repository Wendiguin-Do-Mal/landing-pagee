import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Hero from './components/Hero'
import Tickets from './components/Tickets'
import About from './components/About'

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
   <Form/>
   </div>

  </>)
}

export default App