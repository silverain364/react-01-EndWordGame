import React, {useState, useRef}from 'react'
import './WordGame.scss'

const WordGame = ({firstWord}) => {

    // console.log(firstWord);


    const [word, setWord] = useState(firstWord)
    const [userInput, setUserInput] = useState('')
    const [message, setMessage] = useState('끝말잇기 시작!')
    const inputRef = useRef(null)

    const handleChange = (e)=> {
      setUserInput(e.target.value)
    }

    const checkWord=()=>{

      const trimmedWord=userInput.trim()
      if(!trimmedWord){
        setMessage('단어를 입력하세요!')
      }

      const lastChar = word[word.length-1]
      const firstChar = trimmedWord[0]

      console.log(lastChar, firstChar);
      

      if(lastChar!==firstChar){
        setMessage(`'${lastChar}'(으)로 끝나는 단어로 입력해주세요!`)
        setUserInput('')
      }
      else{
        setMessage('성공!')
        setUserInput('')
        setWord(trimmedWord)

      }

      inputRef.current.focus()
    }
    
  return (
    <div className='game-container'>
        <h2>끝말잇기 게임</h2>
        <p className="current-word">{word}</p>
        <p>{userInput}</p>
        <input 
        value={userInput}
        type="text"
        ref={inputRef}
        onChange={handleChange}
        placeholder='단어를 입력하세요.'
        onKeyUp={(e)=>e.key==='Enter' && checkWord()}
        />
        <button onClick={checkWord}>확인</button>
        <p className="message">{message}</p>
    </div>
  )
}

export default WordGame