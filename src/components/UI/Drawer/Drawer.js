import React, { PureComponent } from 'react'
import './Drawer.scss';
import Cart from './../../Cart';
import Checkout from '../../Checkout';

class Drawer extends PureComponent {
  state = {
    isShow: false,
  }

  handleToggleListCart = () => {
    this.setState((state) => {
      return {
        isShow: !state.isShow
      }
    })
  }

  render() {
    return (
      <div className='Drawer'>
        <div className="Drawer__button">
          <label className="btn btn-default">
            <input
              className='checkbox'
              type='checkbox'
              onChange={this.handleToggleListCart}
              hidden={true}
            />
            <span className="Drawer__button--item">
              <div></div>
              <div></div>
              <div></div>
            </span>
          </label>
        </div>
        {this.state.isShow && (
          <div className='Drawer__products'>
            <Cart />
            <Checkout />
          </div>
        )}
      </div>
    )
  }
}

export default Drawer;
