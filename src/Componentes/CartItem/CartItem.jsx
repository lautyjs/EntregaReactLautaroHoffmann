import './CartItem.css'

const CartItem = ({item, cantidad, img}) => {
  return (
    <div className="CartItem">
        <h3> {item.nombre}  </h3>
        <p> X {cantidad} </p>
        <p> ${item.precio} </p>
    </div>
  )
}

export default CartItem