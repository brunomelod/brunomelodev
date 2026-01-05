import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Orcamento from './pages/orcamento/Orcamento'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orcamento" element={<Orcamento />} />
    </Routes>
  )
}

export default App
