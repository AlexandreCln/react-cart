export const cartVariants = {
  initial: { x: -200, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { type: 'ease', duration: .4 } },
  exit: { x: 200, opacity: 0 }
}
export const cartValidationVariants = {
  initial: { x: 200, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { type: 'ease', duration: .4 } },
  exit: { x: -200, opacity: 0 }
}
export const productRowVariants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -200, opacity: 0, transition: { type: 'ease', duration: .4 } }
}