import ReactGA from 'react-ga'
import { ToDoContextProvider } from "./contexts/ToDoContext"
import { Header } from "./components/Header"
import { Task } from "./components/Task"
import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { useEffect } from 'react'
import { SetGA } from './lib/gtag'

function App() {
  useEffect(() => {
    SetGA()
  }, [])

  return (
    <ToDoContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <Header />

        <Task />
        <GlobalStyle />
      </ThemeProvider>
    </ToDoContextProvider>
  )
}

export default App