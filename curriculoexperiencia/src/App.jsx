import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Orcamento from './pages/orcamento/Orcamento'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orcamento" element={<Orcamento />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
