import './Product.scss'
import clock from '../../assets/icons/clock.svg';
import smile from '../../assets/icons/smile.svg';
import players from '../../assets/icons/players.svg';
import Counter from '../common/Counter';
import { useContext, useState } from 'react';
import { store } from '../../store';
import { price } from '../../services/filters';

export default function Product({ product }) {
  
  const { state, dispatch } = useContext(store);
  const [quantity, setQuantity] = useState(0);
  
  const minQuantity = 0;
  let maxQuantity = Math.min(10, product.quantity);

  // reduces selectable quantity based on the quantity already selected
  state.cart.forEach(item => {
    if (item.product.id === product.id) {
      maxQuantity -= item.quantity;
    }
  });

  const tryIncrementCartProduct = () => {
    if (quantity > 0) {
      dispatch({ type: 'INCREMENT_CART_PRODUCT', product, quantity });
      setQuantity(0);
    }
  }

  return (
    <div className="product">
      <img className="image" src={product.img} alt={product.name} />
      <div className="info-area">
        <div className="name">
          {product.name}
        </div>
        <div className="detail">
          <div className="specifications">
            <span><img src={clock} alt="Logo montre" /> À partir de {product.time} min</span>
            <span><img src={smile} alt="Logo sourire" /> De {product.age_min} à {product.age_max} ans</span>
            <span><img src={players} alt="Logo joueurs" /> Entre {product.player_min} et {product.player_max} joueurs</span>
          </div>
          <div className="desc">
            {product.short_desc}
          </div>
        </div>
        <div className="cart-handle">
          <span>{price(product.price, 'EUR')}</span>
          <Counter 
            count={quantity}
            minCount={minQuantity}
            maxCount={maxQuantity}
            handleDecrement={setQuantity} 
            handleIncrement={setQuantity} 
          />
          <button className={"add-cart" + (quantity > 0 ? '' : ' locked')} onClick={tryIncrementCartProduct}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  )
}