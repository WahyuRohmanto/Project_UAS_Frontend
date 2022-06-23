import GlobalStyle from "./Global.styled";
function Global({ status, value }) {
  return (
    <GlobalStyle>
      <div className="global__card">
        <h3>{status}</h3>
        <h1>{value}</h1>
      </div>
    </GlobalStyle>
  );
}
export default Global;
