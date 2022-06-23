import styled from "styled-components";

const GlobalStyle = styled.div`
  background-color: #ffff;
  position: relative;
  flex: 100%;
  max-width: 250px;
  height: 150px;
  margin: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  text-align: center;
  padding-top: 40px;
  box-shadow: 12px 8px 22px -9px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: 12px 8px 22px -9px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 12px 8px 22px -9px rgba(0, 0, 0, 0.59);

  .global__card:nth-child(1) h1 {
    color: #06d6a0;
  }

  .global__card:nth-child(2) h1 {
    color: #118ab2;
  }

  .global__card:nth-child(3) h1 {
    color: #ef476f;
  }

  .global__card {
    padding-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    flex: 100%;
    max-width: 250px;
  }

  @media screen and (min-width: 992px) {
    flex: 1;
    max-width: 250px;
  }
`;
export default GlobalStyle;
