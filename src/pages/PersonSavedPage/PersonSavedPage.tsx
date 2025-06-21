import styles from "./PersonSavedPage.module.css"
import { PersonHelpItem, HelpNeededItem } from "./Props";
import { PersonHelp, HelpNeeded } from "./data";
import ResponsiveCarousel from "../../components/CarouselHome/CarouselHome";
import { useSearchParams } from "react-router-dom";

function PersonSavedPage() {
  const [searchParams] = useSearchParams();
  const currentID = Number(searchParams.get("id"));
    return(
        <>
        <PersonHelpContent />
        <HelpNeededCarousel/>
        </>
    )
}
export default PersonSavedPage

function PersonHelpContent() {
  const personData = PersonHelp[0];

  return (
    <PersonHelpItem
      name={personData.name}
      year={personData.year}
      diagnosis={personData.diagnosis}
      history={personData.history}
      image={personData.image}
    />
  );
}

function HelpNeededCarousel() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Сейчас ваша помощь нужна</h2>
      </div>
      <div className={styles.helpNeededCarousel}>
        <ResponsiveCarousel>
          {HelpNeeded.map((item) => (
            <HelpNeededItem
              name={item.name}
              year={item.year}
              history={item.history}
              toCollect={item.toCollect}
              collected={item.collected}
              image={item.image}
              id={item.id}
            />
          ))}
        </ResponsiveCarousel>
      </div>
    </div>
  )
}