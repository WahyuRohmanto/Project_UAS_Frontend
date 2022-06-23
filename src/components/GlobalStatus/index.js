import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ENDPOINTS from "../../utils/constants/endpoint";
import Global from "../Global";
import Globals from "../Globals";

function GlobalStatus() {
  //membuat state untuk menyimpan data fetch
  const [globals, setGlobals] = useState("");

  // mengambil data api menggunakan axios
  async function getStatus() {
    const data = await axios(ENDPOINTS.GLOBAL);
    setGlobals(data.data);
  }

  // digunakan untuk merender fetch
  useEffect(() => {
    getStatus();
  }, []);



  return (
    <>
      <Globals>
        {globals && <Global status="Confirmed" value={globals.confirmed.value} />}
        {globals && <Global status="Recovered" value={globals.recovered.value} />}
        {globals && <Global status="Death" value={globals.deaths.value} />}
      </Globals>
    </>
  );
}

export default GlobalStatus;
