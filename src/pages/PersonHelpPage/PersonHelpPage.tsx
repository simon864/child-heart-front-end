import styles from "./PersonHelpPage.module.css"
import { PersonHelpItem, HelpNeededItem } from "./Props";
import { PersonHelp, HelpNeeded } from "./data";
import ResponsiveCarousel from "../../components/CarouselHome/CarouselHome";
import { useSearchParams } from "react-router-dom";

function HelpNeededPage() {
  const [searchParams] = useSearchParams();
  const currentID = Number(searchParams.get("id"));
    return(
        <>
        <div>{currentID}</div>
        <PersonHelpContent />
        <HelpNeededCarousel pageID={currentID}/>
        </>
    )
}
export default HelpNeededPage

interface PageID { pageID: number}

function PersonHelpContent() {
  const personData = PersonHelp[0];

  return (
    <PersonHelpItem
      name={personData.name}
      year={personData.year}
      diagnosis={personData.diagnosis}
      history={personData.history}
      images={personData.images}
    />
  );
}

function HelpNeededCarousel({ pageID } : PageID ) {
  const excludeItems = HelpNeeded.filter(item => {
    if (pageID !== undefined) return item.id !== pageID;
    else return true;
  })
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Сейчас ваша помощь нужна</h2>
      </div>
      <div className={styles.helpNeededCarousel}>
        <ResponsiveCarousel>
          {excludeItems.map((item) => (
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