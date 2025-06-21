import teamStyle from "./teamPage.module.css";
import { TeamCard } from "./props";
import { cardInfo } from "./data";
import Title from "../../components/Title/title";
import Caorusel from "../../components/Caorusel/caorusel";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function TeamPage() {
  return (
    <ScrollToTop>
      <Title text="Команда фонда" />
      <TeamContent />
      <TeamCaorusel />
    </ScrollToTop>
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
