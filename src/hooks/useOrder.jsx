import React from 'react';
import { OrderContext } from '../providers/OrderProvider';
const useOrder = () => {
	const value = React.useContext(OrderContext);
	return value;
};

export default useOrder;
