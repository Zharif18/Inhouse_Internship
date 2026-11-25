import './App.css'

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
      <h1>This is App Component</h1>
      <Data obj="Sece College" />
      <Players players={playersData} />
    </>
  )
}

export default App