import React from 'react'

type TSubtitleContext = {
	text: string
	setText: React.Dispatch<React.SetStateAction<string>>
}

export const SubtitleContext = React.createContext<TSubtitleContext>({
	text: '',
	setText: () => {}
})

export function useSubtitles() {
	return React.useContext(SubtitleContext)
}

export function SubtitleProvider(props: React.PropsWithChildren) {
	const [text, setText] = React.useState<string>('')

	return (
		<SubtitleContext.Provider
			value={{
				text,
				setText
			}}
		>
			{props.children}
		</SubtitleContext.Provider>
	)
}
