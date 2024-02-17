import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/carritoContext";
import { useContext } from "react";
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="cart">
                <h2>No hay productos en el carrito</h2>
                <Link to="/"> Busca los mejores articulos </Link>
            </div>
        )
    }
    return (
        <div className="cart">
            {
                carrito.map(prod => <CartItem key={prod.id} {...prod} />)
            }
            <h3> Total Del Pedido: ${total}  </h3>
            <button onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
            <Link to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart