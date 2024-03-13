import { HomePage } from "../components/home_page"
import { ThemeProvider } from "styled-components"
import { theme } from "../util/styling/theme"
import * as Styled from "./styled"

const App = () => {
  return (
    <ThemeProvider theme={ theme }>
      <Styled.AppContainer>

        <HomePage />

      </Styled.AppContainer>
    </ThemeProvider>
  )
}
export default App