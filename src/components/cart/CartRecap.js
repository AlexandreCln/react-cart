import './CartRecap.scss';
import ProductRow from './ProductRow'
import { motion, AnimatePresence } from 'framer-motion';
import { cartVariants, cartValidationVariants, productRowVariants } from '../animation-variants';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { store } from '../../store';
import { price } from '../../services/filters';

export default function CartRecap() {

  const { state } = useContext(store);

  const totalCart = state.cart.reduce((total, item) => total += (item.product.price * item.quantity), 0);
  
  return (
    <div className="cart-recap">
      <h1>Récapitulatif du panier</h1>
      <div className="recap">
        <AnimatePresence>
          {state.cart.length > 0 && 
            <motion.table variants={cartVariants} initial="initial" animate="animate" exit="exit">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Quantité</th>
                  <th>Prix unitaire</th>
                  <th>Prix total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {state.cart.map(cartProduct => (
                    <motion.tr className="product-row" key={cartProduct.product.id} variants={productRowVariants} exit="exit">
                      <ProductRow cartProduct={cartProduct} />
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </motion.table>
          }
          {state.cart.length === 0 &&        
            <motion.div className="empty-cart" variants={cartVariants} initial="initial" animate="animate" exit="exit">
              <span>Votre panier est vide</span>
              <Link to="/">Voir le catalogue</Link>
            </motion.div>
          }
        </AnimatePresence>
        <AnimatePresence>
          <motion.div className="cart-validation" variants={cartValidationVariants} initial="initial" animate="animate" exit="exit">
            <span>TOTAL: {price(totalCart, 'EUR')}</span>
            <button className={totalCart > 0 ? '' : 'locked'}>Valider le panier</button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}