import { useState } from 'react'
import './App.css'
import Inputlink from './components/inputlink'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inputlink/>
    </>
  )
}

export default App
