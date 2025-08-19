import { Bundlers } from './Bundlers. Vite VS Webpack/Bundlers'
import { Components } from './Components/Components'
import { Lifecycle } from './Lifecycle/Lifecycle'
import { Props } from './Props/Props'
import { State } from './State/State'
import { Structured } from './Structured. Modules VS FSD/Structured'

export const allTheThemes = [
	{
		pathTo: '/bundlers',
		element: <Bundlers />,
		name: 'Сборщики. Vite VS Webpack',
	},
	{
		pathTo: '/structured',
		element: <Structured />,
		name: 'Структура проекта. Modules VS FSD',
	},
	{
		pathTo: '/components',
		element: <Components />,
		name: 'Components',
	},
	{ pathTo: '/props', element: <Props />, name: 'Props' },
	{ pathTo: '/state', element: <State />, name: 'State' },
	{
		pathTo: '/lifecycle',
		element: <Lifecycle />,
		name: 'Lifecycle',
	},
]
