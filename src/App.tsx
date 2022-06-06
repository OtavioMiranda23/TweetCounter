import { useRef, useState } from "react"
import { Counter } from "./components/Counter"
import { Header } from "./components/Header"
import { TweetTable } from "./components/TweetTable/styles"
import { ButtonCopy, TextBox } from "./components/TweetText/styles"
import { GlobalStyle } from "./Styles/global"


function App() {
  const [counter, setCounter] = useState<number>(0);
  const limmit = 280;

  const textAreaRef = useRef<any>(undefined);
  
  function copyToClipBoard(event:any){
    textAreaRef.current?.select();
    document.execCommand('copy');
    
    event.target.focus();

  };  

   return (
    <>
      <GlobalStyle />
      <Header />
      <TweetTable>

        <TextBox counterOrigin={counter} limmit={limmit}>
            <h2> Tweet Counter 1.1 </h2>
            <textarea
            ref={textAreaRef}
            placeholder="Insira aqui seu texto =]"
            onChange={event => setCounter(event.target.value.length)}>

            </textarea>              
                {
                  document.queryCommandSupported('copy') &&
                  <div>
                  <ButtonCopy onClick={copyToClipBoard}>Copy</ButtonCopy>

                </div>
                  }

            <Counter counterOrigin={counter} limmit={limmit}/>
        </TextBox>

      </TweetTable>
    </>
  )  
  
}
 export default App
