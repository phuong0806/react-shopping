import React from 'react'
import './Item.scss';

const Item = ({ id, image, price, sizes, title, quantity, addToCart, removeFromCart }) => {
    return (
        <div className="Cart__item">
            <div className="Cart__item--info">
                <img src={image} alt={title} className="Cart__item--img" />
                <div className="Cart__item--detail">
                    <div className="Cart__item--title">{title}</div>
                    <div className="Cart__item--type">
                        <span>{sizes} </span> | <span>Black with custom print</span>
                    </div>
                    <div className="Cart__item--quantity">
                        <button onClick={() => addToCart(id)}>+</button>
                        <span>{quantity}</span>
                        <button onClick={() => removeFromCart(id)}>-</button>
                    </div>
                </div>
            </div>
            <div className="Cart__item--price">
                <span>$ {price}</span>
            </div>
        </div>
    )
}

export default Item;
