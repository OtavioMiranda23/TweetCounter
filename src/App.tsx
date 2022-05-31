import { useState } from "react"
import { Counter } from "./components/Counter"
import { Header } from "./components/Header"
import { TweetTable } from "./components/TweetTable/styles"
import { TextBox } from "./components/TweetText/styles"
import { GlobalStyle } from "./Styles/global"


function App() {
  const [counter, setCounter] = useState<number>(0);
  const limmit = 280;
  return (
    <>
      <GlobalStyle />
      <Header />
      <TweetTable>

        <TextBox counterOrigin={counter} limmit={limmit}>
            <h2> Tweet Counter 1.0 </h2>
            <textarea
            placeholder="Insira aqui seu texto =]"
            onChange={event => setCounter(event.target.value.length)}>
            </textarea>
            <Counter counterOrigin={counter} limmit={limmit}/>
        </TextBox>

      </TweetTable>
    </>
  )

}
 export default App
