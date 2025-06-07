
import './App.css'
import AboutUs from './Components/AboutUs'
import HomeComponent from './Components/HomeComponent'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Services from './Components/Services'

function App() {


  return (
    <>
      <div>
        <Navbar/>
        <HomeComponent/>
         <AboutUs/>
         <Projects/>
         <Services/>
      </div>
    </>
  )
}

export default App
