import styled from "styled-components";

const FormStyled = styled.div`
  text-align: center;

  .add {
    margin-bottom: 1rem;
  }

  .add__title {
    margin: 10px;
    color: #06d6a0;
  }

  .container__left {
    display: none;
  }
  .add__img {
    border-radius: 10px;
    margin: 0 30px;
    text-shadow: 2px 2px;
  }
  .container__right {
    margin: 0 auto;
    max-width: 200px;
  }

  .add__label {
    margin-top: 20px;
  }

  .add__input {
    padding: 5px;
    border-radius: 10px;
    border-color: #06d6a0;
    margin-top: 5px;
    text-transform: capitalize;
  }

  .add__button {
    margin-bottom: 1rem;
    padding: 8px 65px;
    border-radius: 10px;
    border: none;
    background-color: #06d6a0;
    color: #ffff;
    margin-bottom: 1rem;
    margin-top: 6px;
  }

  .add__selectProv {
    padding: 10px 43px;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 6px;
    border-color: #06d6a0;
  }
  .add__select {
    padding: 10px 80px;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 6px;
    border-color: #06d6a0;

  }
  .add__img {
    width: 19rem;
  }

  @media screen and (min-width: 992px) {
    .add {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 3rem auto;
      max-width: 500px;
    }

    .add__title {
      text-align: center;
    }
    
     .add__img {
    width: 30rem;
  }
    .container__right {
      text-align: left;
    }

    .add__label {
      margin-bottom: 1rem;
    }

    .add__input {
      margin-top: 10px;
    }

    .add__button {
      margin-top: 10px;
    }
  }
`;

export default FormStyled;
