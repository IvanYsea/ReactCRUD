import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/create">Crear Post</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;