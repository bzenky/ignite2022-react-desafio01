import { ReactNode, useContext } from "react"
import { ThemeProvider } from "styled-components"
import { ToDoContext } from "../../contexts/ToDoContext"
import { defaultTheme, lightTheme } from "./default"

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  const { theme } = useContext(ToDoContext)

  const currentTheme = theme === 'default'
    ? defaultTheme
    : lightTheme

  return (
    <ThemeProvider theme={currentTheme}>
      {children}
    </ThemeProvider>
  )
}
