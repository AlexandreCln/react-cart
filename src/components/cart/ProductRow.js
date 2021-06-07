import './ProductRow.scss';
import Counter from '../common/Counter';
import { useContext } from 'react';
import { store } from '../../store';
import { price } from '../../services/filters';
import { Link } from "react-router-dom";

export default function ProductRow({ cartProduct }) {

  const { dispatch } = useContext(store);
  const { product, quantity } = cartProduct;

  const minQuantity = 0;
  const maxQuantity = Math.min(10, product.quantity);

  const decrementCartProduct = () => {
    if (quantity > minQuantity) {
      dispatch({ type: 'DECREMENT_CART_PRODUCT', product, quantity: 1 });
    }
  };
  const incrementCartProduct = () => {
    if (quantity < maxQuantity) {
      dispatch({ type: 'INCREMENT_CART_PRODUCT', product, quantity: 1 });
    }
  };
  const removeCartProduct = () => {
    dispatch({ type: 'REMOVE_CART_PRODUCT', product });
  };

  return (
    <>
      <td>
        <Link to="/"><img src={product.img} alt={product.name} /></Link>
      </td>
      <td>
        <Link to="/"><span className="name">{product.name}</span></Link>
      </td>
      <td data-label="Quantité">
        <Counter 
          count={quantity}
          minCount={minQuantity}
          maxCount={maxQuantity} 
          handleDecrement={decrementCartProduct} 
          handleIncrement={incrementCartProduct} 
          />
      </td>
      <td data-label="Prix unitaire">{price(product.price, 'EUR')}</td>
      <td data-label="Prix total">{price(product.price * quantity, 'EUR')}</td>
      <td><button className="remove" onClick={removeCartProduct}>Supprimer</button></td>
    </>
  )
}