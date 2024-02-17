import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/carritoContext.jsx'


const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)
  return (
    <div>
        <Link to={"/cart"}>
        <img className= "imgCarrito" src="../img/CARRITO2.png" alt="Carrito" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
        </Link>
    </div>
  )
}

export default CartWidget