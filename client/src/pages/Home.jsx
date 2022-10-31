import TopBar from "../components/TopBar"
import Introduction from "../components/Introduction"
import PreviousWork from "../components/PreviousWork"
import Skills from "../components/Skills"

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Introduction />
        <PreviousWork />
        <Skills />
      </main>
    </>
  )
}