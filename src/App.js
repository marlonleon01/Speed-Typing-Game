import React from "react"

export default function App() {
	const [text, setText] = React.useState("")

	function handleChange(event) {
		setText(event.target.value)
	}

	return (
		<div>
			<h1>How fast do you type?</h1>
			<textarea value={text} onChange={handleChange}/>
			<h4>Time Remaing: ???</h4>
			<button>Start Game</button>
			<h1>Word Count: ???</h1>
		</div>
	)
}
