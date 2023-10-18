import { Routes, Route } from "react-router-dom"
import Container from "./Components/Container/Container"
import ProjectDetail from "./Views/ProjectDetail/ProjectDetail"
import { AnimatePresence } from "framer-motion"

function App() {

  return (
    <AnimatePresence mode="wait" >
      <Routes>
        <Route path="/" exact element={<Container />} />
        <Route path="/:id" exact element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
