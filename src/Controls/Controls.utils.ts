import { TSize } from './Controls.context'

export const getSize = (size: TSize): number => {
	switch (size) {
		case 'tiny':
			return 7
		case 'small':
			return 12
		case 'normal':
			return 11
		case 'large':
			return 13
		case 'huge':
			return 17
		default:
			return 9
	}
}
