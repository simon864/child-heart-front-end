import philanthropistsStyles from "./PhilanthropistsPage.module.css";
import Title from "../../components/Title/title";
import { philanthopistsArr } from "./data";
import { PhilanthropistCard } from "./props";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function PhilanthropistsPage() {
  return (
    <ScrollToTop>
      <Title text="Наши благотворители" />
      <PhilanthropistsCards />
    </ScrollToTop>
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
