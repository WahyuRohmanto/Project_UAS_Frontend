import styled from "styled-components";

const HelloStyle = styled.div`
  text-align: center;

  h2 {
    color: #06d6a0;
    margin-bottom: 1rem;
  }

  h3 {
    color: #118ab2;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    width: 800px;
  }

  button {
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    background-color: #06d6a0;
    color: #ffff;
    border: none;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 768px) {
    text-align: left;
    align-items: center;
    max-width: 1200px;
    section {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero__left {
      flex-basis: 40%;
    }

    .hero__right {
      flex-basis: 60%;
    }
  }
`;
export default HelloStyle;
