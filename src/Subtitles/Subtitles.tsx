import './Subtitles.css'

import { Input, Stack } from 'rsuite'
import { useEffect, useState } from 'react'

import StackItem from 'rsuite/esm/Stack/StackItem'
import { getSize } from '../Controls/Controls.utils'
import { useControls } from '../Controls/Controls.context'
import { useSubtitles } from './Subtitles.context'

function Subtitles() {
	const [result, setResult] = useState<string>('')

	const subtitles = useSubtitles()
	const { text, setText } = subtitles

	const controls = useControls()
	const { resolution, setResolution } = controls
	const { size, setSize } = controls
	const { position, setPosition } = controls
	const { rewrap, setRewrap } = controls

	useEffect(() => {
		Compute3D(text)
	}, [text])

	const Compute3D = (text: string) => {
		const maxWidth = position === 'horizontal' ? resolution.width / 2 : resolution.width
		const maxHeight = position === 'vertical' ? resolution.height / 2 : resolution.height
		const characterSize = getSize(size)

		const sideCharacterLength = maxWidth / characterSize / 2

		// Loop through each line of the text
		let buffer = ''
		const result = text.split('\n').map((line, i) => {
			// Let's identify the different parts of the .srt
			if (buffer === '__line__' && line === '') {
				// Space between sections
				buffer = ''
				return line
			} else if (buffer === '' && !isNaN(Number(line))) {
				// Line ID
				buffer = '__ID__'
				return line
			} else if (buffer === '__ID__') {
				// Timestamp line
				buffer = '__timestamp__'
				return line
			} else if (buffer === '__timestamp__' || '__line__') {
				// Text line
				buffer = '__line__'
				return line
					.trim()
					.padEnd(sideCharacterLength * 4, ' ')
			}
		})
		console.log(result)
		setResult(result.join('\n'))
	}

	return (
		<Stack direction='column'>
			<h1>Subtitles</h1>
			<Stack direction='row' alignItems='stretch'>
				<StackItem basis={'50%'}>
					<Input
						id='subtitle-text'
						as='textarea'
						onChange={value => setText(value)}
						placeholder='Input your subtitles here'
						style={{ height: '600px' }}
					/>
				</StackItem>
				<StackItem basis={'50%'}>
					<Input id='resulting-text' as='textarea' value={result} placeholder='Input your subtitles here' style={{ height: '600px' }} />
				</StackItem>
			</Stack>
		</Stack>
	)
}

export default Subtitles
