import './Controls.css'

import { InputNumber, SelectPicker, Stack, Text, Toggle } from 'rsuite'
import { TPosition, TSize, useControls } from './Controls.context'

import StackItem from 'rsuite/esm/Stack/StackItem'

function Controls() {
	const controls = useControls()
	const { resolution, setResolution } = controls
	const { size, setSize } = controls
	const { position, setPosition } = controls
	const { rewrap, setRewrap } = controls

	type TSizeSelectData = { label: string; value: TSize }[]
	const sizeSelectData: TSizeSelectData = [
		{ label: 'Tiny', value: 'tiny' },
		{ label: 'Small', value: 'small' },
		{ label: 'Normal', value: 'normal' },
		{ label: 'Large', value: 'large' },
		{ label: 'Huge', value: 'huge' }
	]

	type TPositionData = { label: string; value: TPosition }[]
	const positionData: TPositionData = [
		{ label: 'Side to Side', value: 'horizontal' },
		{ label: 'Top to Bottom', value: 'vertical' }
	]

	return (
		<Stack id={'controls'} direction='column' alignItems='stretch' spacing={6} style={{ flexBasis: '50%' }}>
			<StackItem>
				<h1>Controls</h1>
			</StackItem>
			<StackItem>
				<Stack direction='row' justifyContent='space-between'>
					<Text>Display Resolution: </Text>
					<StackItem>
						<Stack direction='row' spacing={6}>
							<InputNumber
								value={resolution.width}
								onChange={value => setResolution({ width: Number(value), height: resolution.height })}
								style={{ width: 80 }}
							/>
							<Text>x</Text>
							<InputNumber
								value={resolution.height}
								onChange={value => setResolution({ width: resolution.width, height: Number(value) })}
								style={{ width: 80 }}
							/>
						</Stack>
					</StackItem>
				</Stack>
			</StackItem>
			<StackItem>
				<Stack direction='row' justifyContent='space-between'>
					<Text>Subtitle Size (Plex): </Text>
					<SelectPicker
						data={sizeSelectData}
						value={size}
						searchable={false}
						placeholder='Size'
						onChange={value => {
							if (value) setSize(value)
						}}
					/>
				</Stack>
			</StackItem>
			<StackItem>
				<Stack direction='row' justifyContent='space-between'>
					<Text>3D Split</Text>
					<SelectPicker
						data={positionData}
						value={position}
						searchable={false}
						placeholder='Split'
						onChange={value => {
							if (value) setPosition(value)
						}}
					/>
				</Stack>
			</StackItem>
			<StackItem>
				<Stack direction='row' justifyContent='space-between'>
					<Text>Wrap text: </Text>
					<Toggle checked={rewrap} onChange={value => setRewrap(value)} />
				</Stack>
			</StackItem>
		</Stack>
	)
}

export default Controls
