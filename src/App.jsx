import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <form>
        soy un form
      </form>
      
      <Card />
    </div>
  )
}

export default App
