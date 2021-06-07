import { api } from './api.js';
import * as endpoints from './endpoints'

export async function fetchProducts() {
  const url = endpoints.PRODUCT_LIST;
  const products = await api(url);

  return products;
}
