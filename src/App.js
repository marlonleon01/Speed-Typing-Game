import wordGame from "./hooks/wordGame"

export default function App() {
	const [
        text, 
        timeRemaining, 
        isGameRunning, 
        wordCount, 
        textBoxRef, 
        startGame,
        handleChange
    ] = wordGame()
	
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
