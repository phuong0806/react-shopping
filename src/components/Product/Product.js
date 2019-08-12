import React from 'react';
import Button from '../UI/Button';

import './Product.scss';

const Product = ({ title, image, price, onClick, sizes }) => (
    <div className="thumb">
        <img src={image} alt={title} className="thumb__image" />
        <div className="thumb__detail">
            <span className="thumb__detail--name">{title}</span>
            <span className="thumb__detail--price">Price: ${price}</span>
            <span className="thumb__detail--size">Size: {sizes}</span>
        </div>
        <Button onClick={onClick} type="primary">add to cart</Button>
    </div>
);

export default Product;