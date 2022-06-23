import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  padding-bottom: 20px;
`;

const StyledGlobals = styled.section`
  background-color: #f7f7f7;

  .global__title {
    margin: 2rem auto;
    padding-top: 30px;
    text-align: center;
    margin-bottom: 0;
  }

  .region {
    font-size: 3rem;
    color: #06d6a0;
  }
  h3 {
    color: #118ab2;
  }
  .global__container {
    margin: 20px;
    padding-bottom: 20px;
  }

  .global__row {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export default StyledGlobals;
export { Container };
