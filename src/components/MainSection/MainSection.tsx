import "./MainSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type Props = {
  img: string;
  rating: string;
  title: string;
  pricing: number;
  reviewCount: number;
  country: string;
  available: number;
};

export default function MainSection({
  img,
  rating,
  reviewCount,
  country,
  title,
  pricing,
  available,
}: Props) {
  let SaleText;
  let className;

  if (available === 0) {
    SaleText = "SOLD-OUT";
    className = "toggle-sold";
  } else if (available >= 1) {
    SaleText = "AVAILABLE";
    className = "toggle-available";
  }

  return (
    <div className="sections">
      <li>
        <div className="img-container">
          <span>
            <img src={img} alt="img" className="mainImages" />
          </span>

          <p className={className}>{SaleText}</p>
        </div>
        <span>
          <p className="rating">
            <FontAwesomeIcon icon={faStar} className="icon" /> {rating}
            <span className="lighter">
              {" "}
              <span>({reviewCount}) </span> -{country}{" "}
            </span>{" "}
          </p>
          <p className="bio">{title}</p>
          <p className="pricing">
            from ${pricing} <span className="lighter">/ person</span>
          </p>
        </span>
      </li>
    </div>
  );
}
