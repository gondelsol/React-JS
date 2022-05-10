import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <div className="Barra">
            

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href=" ">U&V Análisis</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href=" ">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" ">Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" ">Equipo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" ">Contratar servicios</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
        
    );
}

export default Navbar;