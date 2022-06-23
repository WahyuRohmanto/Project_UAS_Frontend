import axios from "axios";
import { useEffect, useState } from "react";
import Global from "../../components/Global";
import Globals from "../../components/Globals";
import Hello from "../../components/Hello";
import Summary from "../../components/Summary";
import ENDPOINTS from "../../utils/constants/endpoint";

function Indonesia() {
  const [globals, setGlobals] = useState("");

  async function getStatus() {
    const data = await axios(ENDPOINTS.INDONESIA);
    setGlobals(data.data);
  }

  useEffect(() => {
    getStatus();
  }, []);

  console.log(globals);

  return (
    <>
      <Hello />
      <Globals region="Indonesia" subRegion="Data Covid Berdasarkan Indonesia">
        {globals && <Global status="Confirmed" value={globals.confirmed.value} />}
        {globals && <Global status="Recovered" value={globals.recovered.value} />}
        {globals && <Global status="Death" value={globals.deaths.value} />}
      </Globals>
      <Summary subTitle="Summary Data Indonesia" img={ENDPOINTS.SUMINDO} />
    </>
  );
}

export default Indonesia;
