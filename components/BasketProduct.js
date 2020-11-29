import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {basketProduct_add} from '../redux/basketAC';
import {basketProduct_delete} from '../redux/basketAC';


import './BasketProduct.css';

class BasketProduct extends React.PureComponent{

  static propTypes = {
    currentProduct: PropTypes.shape({
      id:  PropTypes.number.isRequired,
      name:  PropTypes.string.isRequired,
      quantity:  PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  };

  addToBasket = () => {
    this.props.dispatch(basketProduct_add(this.props.currentProduct.id) );
  }

  deleteFromBasket = () => {
    this.props.dispatch(basketProduct_delete(this.props.currentProduct.id, Number(this.props.currentProduct.price.toFixed(2)), this.props.currentProduct.name) );
  }


  render() {
    console.log('BasketProduct'+this.props.currentProduct.id+'render')
    return (
      <tr className="basket-products-table">
        <td className="basket-product-name">{this.props.currentProduct.name}</td>
        <td className="basket-product-quantity">
          <input className="basket-product-button" type="button" value="-" onClick={this.deleteFromBasket}/>
          {this.props.currentProduct.quantity}
          <input className="basket-product-button" type="button" value="+" onClick={this.addToBasket}/>
        </td>
        <td className="basket-product-summ">{(Number(this.props.currentProduct.price)*Number(this.props.currentProduct.quantity)).toFixed(2)}</td>
      </tr>
    )
  }
}

export default connect()(BasketProduct);

