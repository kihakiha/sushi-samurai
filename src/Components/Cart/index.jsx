import React from 'react';

import cartSvg from '../../Assets/img/svg/cart.svg';
import useOrder from '../../hooks/useOrder';

const Cart = () => {
	const { priceContext } = useOrder();
	return (
		<div className='cart'>
			<div className='cartIcon'>
				<img src={cartSvg} alt='Cart' />
			</div>
			<div className='cartInfo'>
				<div className='cartInfo-top'>
					<div className='cartInfo-topLeft'>
						<p>Ваш заказ:</p>
						<h1>
							<span>{priceContext}</span>$
						</h1>
					</div>
				</div>
				<div className='orderBot'>
					<a href='/'>
						<button className='order'>Order</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Cart;
