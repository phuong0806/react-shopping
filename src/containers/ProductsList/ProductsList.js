import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { loadProducts } from '../../actions/productAction';
import { addToCart } from '../../actions/cartAction';
import Spinner from '../../components/UI/Spinner';
import Product from '../../components/Product';
import { getVisibleProducts } from '../../reducers/productReducer';
import './ProductsList.scss'

class ProductsList extends PureComponent {
    componentDidMount() {
        this.props.loadProducts();
    }

    render() {
        const { product, addToCart } = this.props;
        return (
            <div className="Products">
                {product.isFetching && <Spinner />}
                {product.isSuccess && 
                    product.visibleIds.map(id => (
                        <Product 
                            key={id}
                            onClick={() => addToCart(id)}
                            {...product[id]}
                        />
                    ))}
            </div>
        )
    }
}

const mapState = (state) => ({
    product: state.product,
    listProduct: getVisibleProducts(state.product),
});

const mapDispatch = {
    loadProducts,
    addToCart,
}

export default connect(mapState, mapDispatch)(ProductsList);