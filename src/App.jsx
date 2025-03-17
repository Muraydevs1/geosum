import Home from './components/home';
import React from 'react'
import About from './components/about'
import Service from "./components/service";
import Footer from "./components/footer";
import Projects from './components/projects';
function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Service/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
