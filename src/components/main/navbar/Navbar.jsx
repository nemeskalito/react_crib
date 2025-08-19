import './navbar.css'
import { NavLink } from 'react-router'
import { allTheThemes } from '../../book/allTheThemes'

export const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar__items'>
				{allTheThemes.map(item => {
					return (
						<NavLink key={item.name} to={item.pathTo}>
							<div className='navbar__item'>{item.name}</div>
						</NavLink>
					)
				})}
			</div>
		</div>
	)
}
