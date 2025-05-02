import boardStyle from "./boardPage.module.css";
import { PeopleCardProps } from "./interfaces";

export function PeopleCard({
  image,
  title,
  name,
  description,
}: PeopleCardProps) {
  return (
    <div className={boardStyle.cardContainer}>
      <div>
        <img src={image} alt="" />
      </div>
      <div className={boardStyle.infoContainer}>
        <p>{title}</p>
        <hr />
        <p>{name}</p>
        <span>{description}</span>
      </div>
    </div>
  );
}
