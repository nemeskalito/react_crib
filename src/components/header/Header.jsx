import './header.css'
export const Header = () => {
	return (
		<div className='header__wrapper'>
			<header>
				<div className='header__container'>
					<div className='header__line'>
						<div className='header__logo'>
							<img src='../../src/assets/react.svg' alt='logo' />
							<div className='wheels'>
								<div className='wheel wheel-nautical'></div>
								<div className='wheel wheel-gold'></div>
								<div className='wheel wheel-synapse'></div>
								<div className='wheel wheel-obsidian'></div>
							</div>
						</div>
						<div className='header__theme'>
							<button></button>
						</div>
						<div className='header__linkGit'>
							<a href='https://github.com/nemeskalito/react_crib'>
								<img src='../../src/assets/github.svg' alt='github' />
							</a>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}
