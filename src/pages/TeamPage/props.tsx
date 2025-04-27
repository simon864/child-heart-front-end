import teamStyle from "./teamPage.module.css";
import { PeopleCardProps } from "./interfaces";

export function TeamCard({ image, name, post }: PeopleCardProps) {
  return (
    <>
      <div className={teamStyle.cardContainer}>
        <div className={teamStyle.imageContainer}>
          <img src={image} alt="Фото" />
        </div>
        <div className={teamStyle.peopleInfo}>
          <p>{name}</p>
          <span>{post}</span>
        </div>
      </div>
    </>
  );
}
