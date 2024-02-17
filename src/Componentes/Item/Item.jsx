import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img, stock}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>{nombre} </h3>
        <p>Cod: {id} </p>
        <p>STOCK: {stock}</p>
        <p>${precio} </p>

        <Link to={`/item/${id}`} className='item-info'> Ver Mas </Link>
        {/* <button> Ver Detalles </button> */}
    </div>
  )
}

export default Item