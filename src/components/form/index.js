import React, { useState } from "react";
import img from "../asset/img/logo2.png";
import Alert from "../Alert/alert";
import FormStyled from "./Form.styled";

function AddCovid(props) {
  // props untuk lifting
  const { provincedata, setProvdata } = props;

  // State kasus
  const [prov, setProv] = useState("Jakarta");
  // State status
  const [stat, setStat] = useState("");
  // State jumlah
  const [val, setVal] = useState("");

  // Handle Error
  const [isProvError, setProvError] = useState(false);
  const [isStatusError, setStatusError] = useState(false);
  const [isJumlahError, setJumlahError] = useState(false);

  function handleProv(e) {
    setProv(e.target.value);
  }

  function handleStat(e) {
    setStat(e.target.value);
  }

  function handleVal(e) {
    setVal(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (prov === "") {
      setProvError(true);
    } else if (stat === "") {
      setStatusError(true);
    } else if (val === "") {
      setJumlahError(true);
      setStatusError(false);
    } else {
      const dataprov = provincedata.map((data) => (data.kota === prov ? { ...data, [stat]: parseInt(data[stat]) + parseInt(val) } : data));
      setProvdata(dataprov);
      setProvError(false);
      setStatusError(false);
      setJumlahError(false);
    }
  }

  return (
    <FormStyled>
      <div>
        <section className="add">
          <div>
            <img className="add__img" src={img} alt="" />
          </div>

          <div className="container__right">
            <h1 className="add__title">Form Covid</h1>
            <form onSubmit={handleSubmit} action="">
              <label className="add__label" htmlFor="">
                Provinsi
              </label>
              {isProvError && <Alert>Provinsi Wajib Diiisi</Alert>}
              <select value={prov} onChange={handleProv} className="add__selectProv" name="" id="">
                {provincedata.map((province) => (
                  <option key={province.kota} value={province.kota}>
                    {province.kota}
                  </option>
                ))}
              </select>
              <label className="add__label" htmlFor="">
                Status
              </label>
              <select value={stat} onChange={handleStat} className="add__select" name="" id="">
                <option value="">Status</option>
                <option value="kasus">Positif</option>
                <option value="sembuh">Sembuh</option>
                <option value="dirawat">Dirawat</option>
                <option value="meninggal">Meninggal</option>
              </select>
              {isStatusError && <Alert>Status Wajib Diiisi</Alert>}
              <label className="add__label" htmlFor="">
                Jumlah
              </label>
              <input value={val} onChange={handleVal} className="add__input" type="number" />
              {isJumlahError && <Alert>Jumlah Wajib Diiisi</Alert>}
              <button className="add__button">submit</button>
            </form>
          </div>
        </section>
      </div>
    </FormStyled>
  );
}

export default AddCovid;
