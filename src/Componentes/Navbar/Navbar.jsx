import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link ,NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className= "logo" src="/img/Logo-Ferreteria.png" alt="" />
      </Link>
        <nav>
            <ul>
                <li>
                  <NavLink className= "link" to="/categoria/2">Herramientas</NavLink>
                </li>
                <li>
                <NavLink className= "link" to="/categoria/3">Pinturas</NavLink>
                </li>
                <li>
                <NavLink className= "link" to="/categoria/4">Maquinaria</NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>



    </header>
  )
}

export default Navbar