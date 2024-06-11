import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Hero from './components/Hero'

function App() {
 

  return( 
  <>
   <div style={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          width:"100vw",
              }}>
   <Header />
   <Hero/>
   <Form/>
   </div>

  </>)
}

export default App
