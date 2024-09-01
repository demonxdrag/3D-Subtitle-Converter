import './Visualizer.css'

import { Stack } from 'rsuite'

function Visualizer() {
	return (
		<Stack style={{ flexBasis: '50%' }}>
			<h1>Visualizer</h1>
			<div id='display'></div>
		</Stack>
	)
}

export default Visualizer
