import { Header } from "./components/Header"
import { TweetTable } from "./components/TweetTable/styles"
import { TweetText } from "./components/TweetText"
import { GlobalStyle } from "./Styles/global"


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TweetTable>
        <TweetText />

      </TweetTable>
      {/*<Counter /> */}
    </>
  )

}
 export default App
