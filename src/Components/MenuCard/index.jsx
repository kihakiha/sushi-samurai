import React from 'react';
import Modal from '../Modal/';
import closeSvg from '../../Assets/img/svg/close.svg';
import useOrder from '../../hooks/useOrder';
const MenuCard = ({
	name,
	price,
	imageUrl,
	composition,
	weight,
	proteins,
	greases,
	carbohydrates,
	calories,
	pieces,
}) => {
	const [modalActive, setModalActive] = React.useState(false);
	const [addedToCart, setAddedToCart] = React.useState(false);
	const [quantityOfAdded, setQuantityOfAdded] = React.useState(1);

	const { priceContext, setPriceContext } = useOrder();

	const onClickOrderButton = () => {
		setAddedToCart(true);
		setPriceContext(priceContext + price);
	};
	const onClickMinus = () => {
		if (quantityOfAdded === 1) {
			setAddedToCart(false);
			setPriceContext(priceContext - price);
			return;
		} else {
			setQuantityOfAdded(quantityOfAdded - 1);
			setPriceContext(priceContext - price);
			return;
		}
	};
	const onClickPlus = () => {
		setQuantityOfAdded(quantityOfAdded + 1);
		setPriceContext(priceContext + price);
	};
	return (
		<>
			<div className='menu__card'>
				<button onClick={() => setModalActive(true)}>
					<img src={imageUrl} alt='Food' />
					<h3>{name}</h3>
				</button>
				<p>{composition}</p>
				<div className='menu__card-info'>
					<div className='menu__card-info_price'>
						<h2>
							<span>{price}</span>$
						</h2>
					</div>
					<div className='menu__card-info_weight'>
						<p>For {pieces} pcs.</p>
						<p>{weight}</p>
					</div>
				</div>
				{addedToCart ? (
					<div className='addToCart'>
						<button onClick={onClickMinus} className='minusBtn'>
							-
						</button>
						<div className='quantityOfAdded'>{quantityOfAdded}</div>
						<button onClick={onClickPlus} className='plusBtn'>
							+
						</button>
					</div>
				) : (
					<button onClick={onClickOrderButton} className='orderBtn'>
						Order
					</button>
				)}
			</div>
			<Modal active={modalActive} setActive={setModalActive}>
				<div className='menu_card-info_modal'>
					<img src={imageUrl} alt='Sushi' />
					<div className='menu_card-info_modal-text'>
						<div className='heading'>
							{name}
							<button onClick={() => setModalActive(false)} className='cross'>
								<img src={closeSvg} alt='close' />
							</button>
						</div>
						<p>{composition}</p>
						<h4>Food value per 100 grams</h4>
						<ul>
							<li>
								<p>Proteins</p>
								<p>{proteins}</p>
							</li>
							<li>
								<p>Greases</p>
								<p>{greases}</p>
							</li>
							<li>
								<p>Carbohydrates</p>
								<p>{carbohydrates}</p>
							</li>
							<li>
								<p>Calories</p>
								<p>{calories}</p>
							</li>
						</ul>
						<div className='modal__card-info_modal-price'>
							<h1>
								<span>{price}</span>$
							</h1>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default MenuCard;
