import './header.css'
export const Header = () => {
	return (
		<header>
			<div className='header__container'>
				<div className='header__line'>
					<div className='header__logo'>
						<img src='../../src/assets/react.svg' alt='logo' />
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
	)
}
