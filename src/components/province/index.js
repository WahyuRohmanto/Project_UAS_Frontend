import ProvinceStyle from "./Province.styled";
function Province(props) {
  const { provs } = props;

  return (
    <ProvinceStyle>
      <td>{provs.kota}</td>
      <td>{provs.kasus}</td>
      <td>{provs.sembuh}</td>
      <td>{provs.meninggal}</td>
      <td>{provs.dirawat}</td>
    </ProvinceStyle>
  );
}

export default Province;
