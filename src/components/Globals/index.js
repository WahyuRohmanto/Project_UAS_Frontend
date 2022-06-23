import StyledGlobals, { Container } from "./Globals.styled";

function Globals({ region="Globals", subRegion="Data Berdasarkan Globals", children }) {
  return (
    <>
      <Container>
        <StyledGlobals>
          <section>
            <div className="global__title">
              <h1 className="region">{region}</h1>
              <h3>{subRegion}</h3>
            </div>
            <div className="global__container">
              <div className="global__row">{children}</div>
            </div>
          </section>
        </StyledGlobals>
      </Container>
    </>
  );
}

export default Globals;
