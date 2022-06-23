import styled from "styled-components";

const NavbarStyle = styled.div`
  background-color: #06d6a0;
  padding: 1rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    text-decoration: none;
  }

  li {
    margin-bottom: 1rem;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: yellow;
  }

  @media screen and (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      margin-bottom: 0;
    }

    ul {
      flex-direction: row;
    }
    li {
      margin: 0 1rem;
    }
  }
`;

export default NavbarStyle;
