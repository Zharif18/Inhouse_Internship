import './App.css'
import Counter from './Hooks/UseState/Counter.jsx'
import Score from './Hooks/UseState/Score.jsx'
import Componets from './Components/Flipkart.jsx'
import MobileContext from './Components/MobileContext.js'
import User from './Hooks/UseEffect/user.jsx'
import Registration from './Components/Registration.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './Components/Navbar.jsx'

function Players({ players }) {
  return (
    <>
      <h2>List Of Players</h2>
      {players.map((player) => (
        <div key={player.id}>
          <h3>Player: {player.name}</h3>
          <p>Team: {player.Team}</p>
        </div>
      ))}
    </>
  )
}

function Data({ obj }) {
  return (
    <>
      <h3>data component</h3>
      <h2>College Name: {obj}</h2>
    </>
  )
}

function App() {
  const playersData = [
    {
      id: 100,
      name: 'Virat Kohli',
      Team: 'India',
    },
    {
      id: 101,
      name: 'Rohit Sharma',
      Team: 'India',
    },
    {
      id: 102,
      name: 'MS Dhoni',
      Team: 'India',
    }
  ]

  return (
    <>
     {/* <h1>This is App Component</h1>
      <Data obj="Sece College" />
     <Players players={playersData} />
      <Counter />
      <Score />
      <Componets Flipkart = "Flipkart" />
      <MobileContext.Provider>
        <Flipkart />
      </MobileContext.Provider> 
      <User />
      <Registration />*/}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home Page/>} />
          <Route path="/about" element={<About Page/>}/>
          <Route path="/contact" element={<Contact Page/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App