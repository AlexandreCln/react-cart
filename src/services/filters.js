export function price(price, currency) {
  switch (currency) {
    case 'EUR':
      return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price)
    default:
      throw Error('Invalid currency.');
  }
}