import React from 'react';
import MenuCard from '../MenuCard'
import MenuList from '../MenuList'
import MenuCardList from '../../MenuCardList.js'

const Menu = () => {
    const [menuCardsOnType, setMenuCardsOnType] = React.useState('Rolls');

    return (
        <div className="menu">
            <div className="container">
                <MenuList 
                    list={['Rolls', 'Sets', 'Hot Rolls', 'Salads', 'Drinks']}
                    getName={(name) => setMenuCardsOnType(name)}
                />
                <div className="menu__cards">
                    {
                        MenuCardList.filter(menu => menu.type === menuCardsOnType).map((item) => (
                            <MenuCard
                                key={item.id}
                                {...item}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Menu;