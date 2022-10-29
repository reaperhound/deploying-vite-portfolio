import './App.css'
import { Navbar } from './components/index'
import { Home } from './components/index'
import { About } from './components/index'
import { Skills } from './components/index'
import { Works } from './components/index'
import { Contact } from './components/index'


function App() {
 
  return (
    <div className='app'>
      <Navbar />
      <Home name='home' />
      <About name='about' id='about' />
      <Skills />
      <Works />
      <Contact />
    </div>
  )
}

export default App
