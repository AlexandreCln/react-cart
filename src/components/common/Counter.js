import './Counter.scss';

export default function Counter ({ count, minCount, maxCount, handleIncrement, handleDecrement }) {

  const tryDecrement = () => {
    handleDecrement(Math.max(minCount, count - 1));
  }
  const tryIncrement = () => {
    handleIncrement(Math.min(maxCount, count + 1));
  }

  return (
    <div className="counter">
      <button type="button" onClick={tryDecrement}>-</button>
      <span>{count}</span>
      <button type="button" onClick={tryIncrement}>+</button>
    </div>
  )
}