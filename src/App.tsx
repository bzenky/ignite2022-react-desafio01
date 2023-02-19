import ReactGA from 'react-ga4'
import { ToDoContextProvider } from "./contexts/ToDoContext"
import { Header } from "./components/Header"
import { Task } from "./components/Task"
import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"

const TRACKING_ID = "G-WPBZSLGCYH"
ReactGA.initialize(TRACKING_ID)

function App() {
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