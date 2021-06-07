import React, { useReducer, createContext } from 'react';

const initialState = {
  cart: []
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT_CART_PRODUCT':
      const { product, quantity } = action;
      const updatedCart = [...state.cart];

      const updatedProductIndex = updatedCart.findIndex(
        item => item.product.id === product.id
      );
      if (updatedProductIndex === -1) {
        updatedCart.push({ product, quantity });
      } else {
        const updatedProduct = { ...updatedCart[updatedProductIndex] };
        updatedProduct.quantity += quantity;

        updatedCart[updatedProductIndex] = updatedProduct;
      }
      
      return { 
        ...state, 
        cart: updatedCart 
      };
    case 'DECREMENT_CART_PRODUCT':
      return {
				...state,
				cart: state.cart.map((item) => {
					if (item.product.id === action.product.id) {
						return {
							...item,
							quantity: item.quantity - action.quantity
						};
					} else {
						return item;
					}
				})
			};
    case "REMOVE_CART_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter(
          item => item.product.id !== action.product.id
        )
      };
    default:
      throw new Error('Invalid action type.');
  };
}

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }