import './ProductList.scss'
import Product from "./Product";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/api/product-api';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchProducts().then(res => setProducts(res))
  }, []);

  return (
    <div className="product-list">
      <h1>Catalogue de jeux de société</h1>
      <div className="list">
        {products.map((product, i) => (
          <motion.div className="product" key={product.id}
            initial={{ opacity: 0, x: (i % 2 === 0) ? -200 : 200 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: .4 }}
          >
            <Product product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}