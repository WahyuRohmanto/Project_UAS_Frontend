import { Link } from "react-router-dom";
import NavbarStyle from "./Navbar.styled";
function Navbar() {
  return (
    <NavbarStyle>
      <div>
        <nav>
          <div>
            <h1>Covid ID</h1>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Global</Link>
              </li>
              <li>
                <Link to="/covid/indonesia">Indonesia</Link>
              </li>
              <li>
                <Link to="/covid/provinsi">Provinsi</Link>
              </li>
              <li>
                <Link to="/covid/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </NavbarStyle>
  );
}

export default Navbar;
