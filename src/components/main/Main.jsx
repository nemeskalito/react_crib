import { Bundlers } from '../book/Bundlers. Vite VS Webpack/Bundlers'
import './main.css'
import { Navbar } from './navbar/Navbar'

export const Main = () => {
	return (
		<div className='main'>
			<Navbar />
			<div className='main__container'>
				<section className='main__section'>
					<h1 className='main__title'>React book</h1>
					<div className='main__text'>
						<Bundlers />
					</div>
				</section>
			</div>
		</div>
	)
}
