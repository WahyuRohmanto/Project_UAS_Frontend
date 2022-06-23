import styled from "styled-components";

const Container = styled.div`
  background-color: #06d6a0;
  padding: 1rem;
  color: #fff;
`;

const StyledFooter = styled.div`
  .footer {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
  .footer__brand {
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
  }

  li:hover {
    color: yellow;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: yellow;
  }

  @media screen and (min-width: 768px) {
    .footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .footer__brand {
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

export default StyledFooter;
export { Container };
