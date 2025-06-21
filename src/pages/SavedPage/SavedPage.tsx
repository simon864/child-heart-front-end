import styles from "./SavedPage.module.css"
import { HelpedItem, HelpNeededItem } from "./Props";
import { Helped, HelpNeeded } from "./data";
import Title from "../../components/title/title";
import ResponsiveCarousel from "../../components/CarouselHome/CarouselHome";
import { useState } from "react";

function SavedPage() {
    return(
        <>
        <Title text="Вы подарили жизнь" />
        <ContactCards />
        <HelpNeededCarousel />
        </>
    )
}
export default SavedPage

function ContactCards() {
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMore = () => setVisibleCount(prev => prev + 6);

  const hasMoreItems = visibleCount < Helped.length;

  return (
    <>
      <div className={styles.helpedCards}>
        {Helped.slice(0, visibleCount).map((Helped) => (
          <HelpedItem
            name={Helped.name}
            year={Helped.year}
            image={Helped.image}
          />
        ))}
      </div>

      {hasMoreItems && (
        <div className={styles.readMoreContainer}>
          <button onClick={loadMore} className={styles.readMoreButton}>
            Смотреть далее
          </button>
        </div>
      )}
    </>
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
          {HelpNeeded.map((HelpNeeded) => (
            <HelpNeededItem
              name={HelpNeeded.name}
              year={HelpNeeded.year}
              history={HelpNeeded.history}
              toCollect={HelpNeeded.toCollect}
              collected={HelpNeeded.collected}
              image={HelpNeeded.image}
              id={HelpNeeded.id}
            />
          ))}
        </ResponsiveCarousel>
      </div>
    </div>
  )
}