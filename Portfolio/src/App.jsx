import { Routes, Route } from "react-router-dom"
import Container from "./Components/Container/Container"
import ProjectDetail from "./Views/ProjectDetail/ProjectDetail"

function App() {

  return (
    <Routes>
      <Route path="/" exact element={<Container />} />
      <Route path="/:id" exact element={<ProjectDetail />} />
    </Routes>
  )
}

export default App
