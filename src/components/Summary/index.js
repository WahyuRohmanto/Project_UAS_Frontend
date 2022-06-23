import ENDPOINTS from "../../utils/constants/endpoint";
import Globals from "../Globals";
import SumStyled from "./summary.styled";

function Summary({ img = ENDPOINTS.SUMGLOBAL, subTitle = "Summary Data Global" }) {
  return (
    <>
      <SumStyled>
        <Globals region="Summary" subRegion={subTitle}>
          <img src={img} alt="" />
        </Globals>
      </SumStyled>
    </>
  );
}

export default Summary;
