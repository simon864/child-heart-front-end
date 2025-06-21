import styles from "./SavedPage.module.css"
import { Link } from "react-router-dom";

interface HelpedProps {
  name: string;
  year: number;
  image: string;
}

interface HelpNeededProps {
  id: number;
  name: string;
  year: number;
  history: string;
  toCollect: number;
  collected: number;
  image: string;
}

export function HelpedItem({ name, year, image }: HelpedProps) {
  return (
    <>
      <div className={styles.itemContainer}>
        <img 
          src={image}
          className={styles.itemImage}
        />
        
        <div className={styles.contentContainer}>
          <div className={styles.nameYearContainer}>
            <span className={styles.name}>{name}</span>
            <span className={styles.year}>{year} г.р.</span>
          </div>
          
          <span>СБОР ЗАКРЫТ</span>
        </div>
      </div>
    </>
  )
}

export function HelpNeededItem({
  id,
  name,
  year,
  history,
  toCollect,
  collected,
  image
}: HelpNeededProps) {
  const remaining = toCollect - collected;

  return (
    <div className={styles.itemContainerHelp} key={id}>
      <img 
        src={image}
        className={styles.itemImageAlt}
      />
      
      <div className={styles.contentContainer}>
        <div className={styles.nameYearContainer}>
          <span className={styles.name}>{name}</span>
          <span className={styles.year}>{year} г.р.</span>
        </div>
        
        <div className={styles.historyContainer}>
          <div className={styles.history}>
            {history}
          </div>
          <span className={styles.historyEllipsis}>. . .</span>
        </div>
        
        <div className={styles.fundingContainer}>
          <span className={styles.fundingLabel}>Нужно собрать:</span>
          <span className={styles.fundingValue}>{toCollect} р.</span>
          
          <span className={styles.fundingLabel}>Собрано:</span>
          <span className={styles.fundingValue}>{collected} р.</span>
          
          <span className={styles.fundingLabel}>Осталось собрать:</span>
          <span className={styles.fundingValue}>{remaining} р.</span>
        </div>
        
        <div className={styles.actionsContainer}>
          <button className={styles.helpButton}><Link to={"#"}>Хочу помочь</Link></button>
          <span className={styles.readStoryLink}><Link to={"/help-needed-page?id=" + id}>Читать историю</Link></span>
        </div>
      </div>
    </div>
  )
}