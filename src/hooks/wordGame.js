import {useState, useEffect, useRef} from "react"

export default function wordGame(startingTime = 10) {
	const [text, setText] = useState("")
	const [timeRemaining, setTimeRemaining] = useState(startingTime)
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
			setTimeRemaining(startingTime)
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

    return [
        text, 
        timeRemaining, 
        isGameRunning, 
        wordCount, 
        textBoxRef, 
        startGame,
        handleChange
    ]
}