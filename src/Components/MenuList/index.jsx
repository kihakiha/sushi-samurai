import React from 'react';

const MenuList = ({list, getName}) => {
    const [selectedGroup, setSelectedGroup] = React.useState(0)
    const onSelectedGroupClick = (index,name) => {
        setSelectedGroup(index)
        getName(name)
    }
        

    return (
        <div className="menu__list">
            <ul>
                {
                    list.map((name, index) => (
                        <button
                            onClick={() => onSelectedGroupClick(index,name)} 
                            key={`${name}_${index}`} 
                            className={selectedGroup === index ? 'focusedButton' : ''}
                        >
                            <li>{name}</li>
                        </button>
                    ))
                }

            </ul>
        </div>
    );
}

export default MenuList;

// onClick={() => setSelectedGroup(index)} 
