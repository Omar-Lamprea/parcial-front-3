import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import Error from './components/Error'

function App() {
  const [user, setUser] = useState(
    {
      nombre: "",
      cancion: "",
      playList: "https://www.youtube.com/embed/tf7VWiRbGRs"
    }
  )

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const validateForm = () =>{
    let response = false

    user.nombre.length < 3
      ? response = false
      : user.cancion.length < 6
        ? response = false
        : response = true

    return response
  }

  const playList = [
    {
      value: "pop",
      link: "https://www.youtube.com/embed/tf7VWiRbGRs"
    },
    {
      value: "Rock",
      link: "https://www.youtube.com/embed/Y5mZtVD3t8w"
    }
  ]

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(validateForm()){
      setShow(true)
      setError(false)
    }else{
      setShow(false)
      setError(true)
    }
  }

  return (
    <div className="App">
      <h1>Tu canción</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Ingresa tu nombre:</label>
        <input type="text" name="name" id="name" required onChange={(e) => setUser({...user, nombre: e.target.value.trim()})} />

        <label htmlFor="music">Ingresa tu canción preferida:</label>
        <input type="text" name="music" id="music" required onChange={(e) => setUser({...user, cancion: e.target.value.trim()})} />

        <label htmlFor="">De forma opcional te presentamos esta lista de playList para que reproduzcas!!</label>
        <select onChange={(e) => setUser({...user, playList: e.target.value})}>
          {playList.map((c,i) => <option value={c.link} key={i}>{c.value}</option>)}
        </select>
        <button>Enviar canción!</button>
      </form>

      {show && <Card data={user}/>}
      {error && <Error />}
      
    </div>
  )
}

export default App
