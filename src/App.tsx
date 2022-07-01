import { useRef, useState } from "react"
import { Counter } from "./components/Counter"
import { Header } from "./components/Header"
import { TweetTable, Buttons } from "./components/TweetTable/styles"
import { ButtonCopy, TextBox } from "./components/TweetText/styles"
import { GlobalStyle } from "./Styles/global"

import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import { memo } from "react"


function App() {
  const [text, setText] = useState('')

    // ===Emojis===
    const [chosenEmoji, setChosenEmoji] = useState<any>(null);
  
    const onEmojiClick = (event: any, emojiObject: any) => {
      setChosenEmoji(emojiObject);
      setText(text + chosenEmoji.emoji)
    };
    
    const EmojiData = ({chosenEmoji}:any) => (
      <div style={{textAlign: 'center',marginRight: '810px'}}>

      </div>
    );
    
    //console.log(chosenEmoji.emoji)

  const limmit = 280;

  const [counter, setCounter] = useState<number>(0);
  const [emojiVisible, setEmojuVisible] = useState<boolean>(true);


  const textAreaRef = useRef<any>(undefined);
  
  
  function handleChangeTextArea (event: any){
    setText(event.target.value)
  } 
  
  function counterCharacter(event:any){
    setCounter(event.target.value.length )
  }
  
  function callsOnChange(event: any ){
    handleChangeTextArea(event);
    counterCharacter(event)
  }

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
            <ButtonCopy onClick={copyToClipBoard}>Copy</ButtonCopy>
          <Counter counterOrigin={counter} limmit={limmit}/>
            <textarea
            value={text}
            ref={textAreaRef}
            placeholder="Insira aqui seu texto =]"
            onChange={callsOnChange}>
            </textarea>              
                
                <Buttons>
                { emojiVisible && 
                <div className="painelEmoji" style={{textAlign: 'center'}}>
                    <Picker  onEmojiClick={onEmojiClick} skinTone={SKIN_TONE_MEDIUM_DARK}/>
                    { chosenEmoji && <EmojiData chosenEmoji={chosenEmoji}/>}
                </div>
                }
                </Buttons>

                    
        </TextBox>

      </TweetTable>
    </>
  )  
  
}
export default memo(App)
