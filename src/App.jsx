
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import UseState from './UseState'
import UseEffect from './useEffect'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/usestate' element={<UseState />} />
        <Route path='/useEffect' element={<UseEffect/>}></Route>
      
      </Routes>

    </BrowserRouter>
  )
}
export default App
