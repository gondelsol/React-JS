import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Barra">

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link to='/' ><a className="navbar-brand" href=" ">U&V Análisis</a></Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href=" ">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" ">Servicios</a>
        </li>
        <li className="nav-item">
        <Link to='/category/1' ><a className="nav-link" href=" "> Basicos </a></Link>
        </li>
        <li className="nav-item">
        <Link to='/category/2' > <a className="nav-link" href=" ">  Fenolicos  </a></Link>
        </li>
        <li className="nav-item">
        <a className="nav-link" href=" ">Loggin</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href=" ">Password</a>
        </li>
      </ul>

    </div>
  </div>
  
  <div className="container right" >
  <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    
        <button className="btn btn-secondary" type="submit">Search</button>
</form>
  <CartWidget />
  </div>
</nav>
        </div>

    );
}

export default Navbar;