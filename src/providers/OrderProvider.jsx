import React from 'react';

export const OrderContext = React.createContext({
	priceContext: 0,
});

export const OrderProvider = ({ children }) => {
	const [priceContext, setPriceContext] = React.useState(0);

	const priceValue = React.useMemo(
		() => ({ priceContext, setPriceContext }),
		[priceContext]
	);

	return (
		<OrderContext.Provider value={priceValue}>{children}</OrderContext.Provider>
	);
};
