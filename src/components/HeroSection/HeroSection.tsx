import "./HeroSection.css";
import row1 from "../../assets/img/grid/a.jpeg";
import row2 from "../../assets/img/grid/h.jpeg";
import row3 from "../../assets/img/grid/i.jpeg";
import col1 from "../../assets/img/grid/bp.jpeg";
import col2 from "../../assets/img/grid/cp.jpeg";
import col3 from "../../assets/img/grid/dp.jpeg";
import col4 from "../../assets/img/grid/ep.jpeg";


export default function HeroSection() {
  return (
    <div className="main">
      
      <div className="row">
        <div className="column">
          <img src={row1} alt="" />
          <img src={col2} alt="" />
          <img src={row3} alt="" />
        </div>
        <div className="column">
          <img src={col4} alt="" />
          <img src={col1} alt="" />
          <img src={row2} alt="" />
        </div>
        <div className="column">
          <img src={row1} alt="" />
          <img src={col3} alt="" />
          <img src={row3} alt="" />
        </div>

      </div>

      <div className="hero-contents">
        <h1 className="online">Online Experiences</h1>
        <p className="ads">
          Join unique interactive activities led by one-of-a-kind-hosts
          all without leaving home
        </p>
      </div>
    </div>
  );
}

 HeroSection;