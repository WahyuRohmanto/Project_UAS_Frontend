import { Link } from "react-router-dom";

import StyledFooter, { Container } from "./Footer.styled";

function Footer() {
  return (
    <Container>
      <StyledFooter>
        <footer className="footer">
          <div className="footer__brand">
            <h1>Covid ID</h1>
            <h3>Development By Wahyu Rohmanto</h3>
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
        </footer>
      </StyledFooter>
    </Container>
  );
}

export default Footer;
