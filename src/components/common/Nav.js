import './Nav.scss';
import logo from '../../assets/icons/logo-playin.png';
import cart from '../../assets/icons/cart.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { store } from '../../store';

export default function Nav() {

  const { state } = useContext(store);

  const cartQuantity = state.cart.reduce((total, item) => total += item.quantity, 0);

  const quantityVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
        </li>
      </ul>
        <Link to="/mon-panier">
      <div className="cart">
        <AnimatePresence>
          {cartQuantity > 0 && 
            <motion.span className="quantity" variants={quantityVariants} initial="initial" animate="animate" exit="initial">
              {cartQuantity}
            </motion.span>
          }
        </AnimatePresence>
        <img src={cart} alt="Panier" /> 
        <span>Mon panier</span>
      </div>
        </Link>
    </nav>
  )
}