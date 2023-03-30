import {useEffect, useRef, useState} from "react"

export default function App() {
	const STARTING_TIME = 5

	const [text, setText] = useState("")
	const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
	const [isGameRunning, setIsGameRunning] = useState(false)
	const [wordCount, setWordCount] = useState(0)
	const textBoxRef = useRef(null)

	useEffect(() => {
		if (isGameRunning) {
			if (timeRemaining > 0) {
				setTimeout(() => {
					setTimeRemaining(time => time - 1)
				}, 1000)
			} else if (timeRemaining === 0) {
				endGame()
			}
		}
	}, [timeRemaining, isGameRunning])

	function startGame() {
			setIsGameRunning(true)
			setTimeRemaining(STARTING_TIME)
			setText("")
			textBoxRef.current.disabled = false
			textBoxRef.current.focus()
	}

	function endGame() {
		setIsGameRunning(false)
		calculateWordCount(text)
	}

	function handleChange(event) {
		setText(event.target.value)
	}
	
	function calculateWordCount(text) {
		const wordsArr = text.trim().split(" ")
		const filteredWords = wordsArr.filter(word => word !== "")
		setWordCount(filteredWords.length)
	}

	return (
		<div>
			<h1>How fast do you type?</h1>
			<textarea 
				value={text} 
				onChange={handleChange} 
				disabled={isGameRunning === false}
				ref={textBoxRef}
			/>
			<h4>Time Remaing: {timeRemaining}</h4>
			<button 
				onClick={startGame} 
				disabled={isGameRunning}
			>
				Start Game
			</button>
			<h1>Word Count: {wordCount}</h1>
		</div>
	)
}
