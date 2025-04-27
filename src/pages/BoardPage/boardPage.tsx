import Title from "../../components/Title/title";
import boardStyle from "./boardPage.module.css";
import { cardInfo } from "./data";
import { PeopleCard } from "./props";

export default function BoardPage() {
  return (
    <>
      <Title text="Правление фонда" />
      <BoardContent />
    </>
  );
}

function BoardContent() {
  return (
    <div className={boardStyle.mainContent}>
      {cardInfo.map((cardInfo, index) => (
        <PeopleCard
          key={index}
          image={cardInfo.image}
          title={cardInfo.title}
          name={cardInfo.name}
          description={cardInfo.description}
        />
      ))}
    </div>
  );
}
