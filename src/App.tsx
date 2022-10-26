import { ToDoContextProvider } from "./contexts/ToDoContext"
import { Header } from "./components/Header"
import { Task } from "./components/Task"

function App() {
  return (
    <ToDoContextProvider>
      <Header />

      <Task />
    </ToDoContextProvider>
  )
}

export default App