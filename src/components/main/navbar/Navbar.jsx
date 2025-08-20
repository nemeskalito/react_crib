import './navbar.css'
import { NavLink } from 'react-router'
import { allTheThemes } from '../../book/allTheThemes'
import { useState } from 'react'

export const Navbar = () => {
	const [active, setActive] = useState(null)
	return (
		<div className='navbar'>
			<div className='navbar__items'>
				{allTheThemes.map(item => {
					return (
						<NavLink key={item.name} to={item.pathTo}>
							<div
								onClick={() => setActive(item.name)}
								className={`navbar__item ${
									active === item.name ? 'active' : ''
								}`}
							>
								{item.name}
							</div>
						</NavLink>
					)
				})}
			</div>
		</div>
	)
}
