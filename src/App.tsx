import ReactGA from 'react-ga4'
import { ToDoContextProvider } from "./contexts/ToDoContext"
import { Header } from "./components/Header"
import { Task } from "./components/Task"
import { GlobalStyle } from "./styles/global"
import { Theme } from './styles/themes/ThemeProvider'

const TRACKING_ID = "G-WPBZSLGCYH"
ReactGA.initialize(TRACKING_ID)

function App() {
  return (
    <ToDoContextProvider>
      <Theme>
        <Header />

        <Task />
        <GlobalStyle />
      </Theme>
    </ToDoContextProvider>
  )
}

export default App