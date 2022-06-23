import Province from "../province";
import ProvincesStyles from "./Provinces.styled";
function Provinces(props) {
  const { provincedata } = props;
  return (
    <ProvincesStyles>
      <div className="prov__title">
        <h1>Provinsi</h1>
        <h3>Data Covid Berdasarkan Provinsi</h3>
      </div>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Kota</th>
              <th>Kasus</th>
              <th>Sembuh</th>
              <th>Meninggal</th>
              <th>Dirawat</th>
            </tr>
          </thead>
          <tbody>
            {provincedata.map(function (provs) {
              return <Province key={provs.kota} provs={provs} />;
            })}
          </tbody>
        </table>
      </div>
    </ProvincesStyles>
  );
}

export default Provinces;
