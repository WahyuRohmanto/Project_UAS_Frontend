import assets from "../asset/img/logo.png";
import HelloStyle from "./Hello.styled";

function Hello() {
  return (
    <HelloStyle>
      <section>
        <div className="hero__left">
          <h2>Covid ID</h2>
          <h3>Monitoring Perkembangan Covid</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam cum accusamus quisquam earum velit ea nobis maiores exercitationem nam temporibus.</p>
          <button>Vaccine</button>
        </div>
        <div className="hero__right">
          <img src={assets} alt="placeholder" />
        </div>
      </section>
    </HelloStyle>
  );
}

export default Hello;
