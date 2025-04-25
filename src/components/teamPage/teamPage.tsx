import teamStyle from "./teamPage.module.css";
import { TeamCard } from "./props";
import { cardInfo } from "./data";
import Title from "../title/title";
import Caorusel from "../caorusel/caorusel";

export default function TeamPage() {
  return (
    <>
      <Title text="Команда фонда" />
      <TeamContent />
      <TeamCaorusel />
    </>
  );
}

export function TeamContent() {
  return (
    <div className={teamStyle.teamContainer}>
      {cardInfo.map((cardInfo, index) => (
        <TeamCard
          key={index}
          image={cardInfo.image}
          name={cardInfo.name}
          post={cardInfo.post}
        />
      ))}
    </div>
  );
}

export function TeamCaorusel() {
  return (
    <div className={teamStyle.caoruselContainer}>
      <Caorusel>
        {cardInfo.map((cardInfo, index) => (
          <TeamCard
            key={index}
            image={cardInfo.image}
            name={cardInfo.name}
            post={cardInfo.post}
          />
        ))}
      </Caorusel>
    </div>
  );
}
