import "./card.styles.css";
import { Monster } from "../../App";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster: { id, name, email } }: CardProps) => {
  return (
    <div className="card-container">
      <img
        alt={`Monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
