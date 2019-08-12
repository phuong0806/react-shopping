import React from 'react'
import Item from '../Item';

const List = ({ items, addToCart, removeFromCart, total }) => {
    return (
        <div className="Cart">
            <div className="Cart__total">Product ({total})</div>
            <div className="Cart__items">
                {items.length > 0 ? 
                    items.map(item => 
                        <Item 
                            key={item.id} 
                            {...item} 
                            addToCart={addToCart} 
                            removeFromCart={removeFromCart} />
                    ) : 'No products'}
            </div>
        </div>
    )
}

export default List;
