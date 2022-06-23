import ContStyled from "./container.syled"

function Container({ children }) {
  return (
  <>
  <ContStyled>
    {children}
  </ContStyled>
  </>
  )
}

export default Container