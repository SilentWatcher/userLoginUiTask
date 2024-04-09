
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'

import Login from "./component/Login/Login"
import Profile from "./component/Profile/Profile"
import Signup from "./component/Signup/Signup"
import Home from './component/Home/Home';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
