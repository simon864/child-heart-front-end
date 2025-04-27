import philanthropistsStyles from "./PhilanthropistsPage.module.css";
import Title from "../../components/Title/title";
import { philanthopistsArr } from "./data";
import { PhilanthropistCard } from "./props";

export default function PhilanthropistsPage() {
  return (
    <>
      <Title text="Наши благотворители" />
      <PhilanthropistsCards />
    </>
  );
}

function PhilanthropistsCards() {
  return (
    <div className={philanthropistsStyles.contentContainer}>
      {philanthopistsArr.map((card) => (
        <PhilanthropistCard key={card.id} {...card} />
      ))}
    </div>
  );
}
