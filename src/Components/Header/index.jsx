import React from 'react';
import clock from '../../Assets/img/svg/clock.svg';
import logo from '../../Assets/img/Logo.png';
const Header = () => {
	return (
		<>
			<div className='container'>
				<div className='header'>
					<h4>
						<span>Delivery</span> Los Angeles
					</h4>
					{/* <ul className='nav'>
						<button className='nav__link'>
							<li>Menu</li>
						</button>
						<button className='nav__link'>
							<li>Sales</li>
						</button>
						<button className='nav__link'>
							<li>About us</li>
						</button>
						<button className='nav__link'>
							<li>Delivery</li>
						</button>
					</ul> */}
				</div>
			</div>
			<div className='contact'>
				<div className='container'>
					<div>
						<img src={logo} alt='logo' />
					</div>
					<div className='contact__call'>
						<span>Call the number</span>
						<h3>
							<a href='tel:'>+1 XXX-XXX-XXXX</a>
						</h3>
					</div>
					<div className='contact__time'>
						<img src={clock} alt='Time' />
						<div className='contact__time-text'>
							<span>Taking orders</span>
							<h3>around the clock</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
