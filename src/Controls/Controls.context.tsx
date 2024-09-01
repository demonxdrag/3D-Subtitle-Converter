import React from 'react';
export type TResolution = { width: number; height: number }
export type TSize = 'tiny' | 'small' | 'normal' | 'large' | 'huge'
export type TPosition = 'horizontal' | 'vertical'
type TControlContext = {
	resolution: TResolution
	size: TSize
	position: TPosition
	rewrap: boolean
	setResolution: React.Dispatch<React.SetStateAction<TResolution>>
	setSize: React.Dispatch<React.SetStateAction<TSize>>
	setPosition: React.Dispatch<React.SetStateAction<TPosition>>
	setRewrap: React.Dispatch<React.SetStateAction<boolean>>
}

export const ControlContext = React.createContext<TControlContext>({
	resolution: { width: 1920, height: 1080 },
	size: 'small',
	position: 'horizontal',
	rewrap: true,
	setResolution: () => {},
	setSize: () => {},
	setPosition: () => {},
	setRewrap: () => {}
})

export function useControls() {
	return React.useContext(ControlContext)
}

export function ControlProvider(props: React.PropsWithChildren) {
	const [resolution, setResolution] = React.useState<TResolution>({ width: 1920, height: 1080 })
	const [size, setSize] = React.useState<TSize>('small')
	const [position, setPosition] = React.useState<TPosition>('horizontal')
	const [rewrap, setRewrap] = React.useState<boolean>(true)

	return (
		<ControlContext.Provider
			value={{
				resolution,
				size,
				position,
				rewrap,
				setResolution,
				setSize,
				setPosition,
				setRewrap
			}}
		>
			{props.children}
		</ControlContext.Provider>
	)
}
