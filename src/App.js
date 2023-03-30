import React from "react"

export default function App() {
	const STARTING_TIME = 5

	const [text, setText] = React.useState("")
	const [timeRemaining, setTimeRemaining] = React.useState(STARTING_TIME)
	const [isGameRunning, setIsGameRunning] = React.useState(false)
	const [wordCount, setWordCount] = React.useState(0)

	React.useEffect(() => {
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
