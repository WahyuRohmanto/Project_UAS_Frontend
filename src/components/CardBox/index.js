
import GlobalsStyle from "./Globals.styled";

function Globals({ region = "Global", subRegion = "Data Covid Berdasarkan Global", children }) {
  return (
    <>
      <GlobalsStyle>
        <section className="global">
          <div className="global__title">
            <h1>{region}</h1>
            <h3>{subRegion}</h3>
          </div>
          <div className="global__container">
            <div className="global__row"> {children}</div>
          </div>
        </section>
      </GlobalsStyle>
    </>
  );
}

export default Globals;
