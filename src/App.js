import React from "react"

export default function App() {
	const [text, setText] = React.useState("")
	const [timeRemaining, setTimeRemaining] = React.useState(5)
	const [gameRunning, setGameRunning] = React.useState(false)

	React.useEffect(() => {
		if (timeRemaining > 0) {
			setTimeout(() => {
				setTimeRemaining(time => time - 1)
			}, 1000)
		}
	}, [timeRemaining])

	function handleChange(event) {
		setText(event.target.value)
	}

	function calculateWordCount(text) {
		setGameRunning(true)
		const wordsArr = text.trim().split(" ")
		const filteredWords = wordsArr.filter(word => word !== "")
		return filteredWords.length
	}

	return (
		<div>
			<h1>How fast do you type?</h1>
			<textarea value={text} onChange={handleChange}/>
			<h4>Time Remaing: {timeRemaining}</h4>
			<button onClick={() => calculateWordCount(text)}>Start Game</button>
			<h1>Word Count: ???</h1>
		</div>
	)
}
