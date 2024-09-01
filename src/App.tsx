import 'rsuite/dist/rsuite.min.css'
import './App.css'

import { ControlProvider } from './Controls/Controls.context'
import Controls from './Controls/Controls'
import { Stack } from 'rsuite'
import { SubtitleProvider } from './Subtitles/Subtitles.context'
import Subtitles from './Subtitles/Subtitles'
import Visualizer from './Visualizer/Visualizer'

function App() {
	return (
		<div className='App'>
			<ControlProvider>
				<SubtitleProvider>
					<Stack direction='row' alignItems='stretch' style={{ width: '100%' }}>
						<Controls />
						<Visualizer />
					</Stack>
					<Subtitles />
				</SubtitleProvider>
			</ControlProvider>
		</div>
	)
}

export default App
