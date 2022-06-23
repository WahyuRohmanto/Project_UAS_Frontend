import AddCovid from "../../components/form";

import Hello from "../../components/Hello";
import Provinces from "../../components/provinces";

function Provinsi({ provincedata, setProvdata }) {
  return (
    <>
      <Hello />
      <Provinces provincedata={provincedata} />
      <AddCovid provincedata={provincedata} setProvdata={setProvdata} />
    </>
  );
}

export default Provinsi;
