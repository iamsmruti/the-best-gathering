// Importing required libraries
import React from 'react'
import 'rsuite/dist/styles/rsuite-default.css';
import { Toggle } from 'rsuite';

export default function App() {

// State for the current toggle value
const [currentValue, setCurrentValue] = React.useState(0)

return (
	<div style={{
	display: 'block', width: 400, paddingLeft: 30
	}}>
	<h4>React Suite Toggle Component</h4>
	<Toggle
		onChange={(value) => { setCurrentValue(value) }}
	/>
	{currentValue === true ? "Toggle On" : "Toggle Off"}
	</div>
);
}
