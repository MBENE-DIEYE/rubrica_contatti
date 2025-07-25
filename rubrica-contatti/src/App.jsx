import { Routes, Route } from "react-router-dom"
import Home from "./assets/Pages/Home"
import RubricaContatti from "./assets/Pages/RubricaContatti"
import DettaglioContatti from "./assets/Pages/DettaglioContatto"
import Preferiti from "./assets/Pages/Preferiti"
import Navbar from "./Components/Navbar"
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes path="/">
        <Route path="" element={<Home />} />
        <Route path="rubricaContatti" element={<RubricaContatti />} />
        <Route path="dettaglioContatti/:id" element={<DettaglioContatti />} />
        <Route path="preferiti" element={<Preferiti />} />
      </Routes>
    </div>
  )
}

export default App
