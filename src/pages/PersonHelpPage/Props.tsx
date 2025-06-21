import { useState } from "react";
import styles from "./PersonHelpPage.module.css"
import { Link } from "react-router-dom";

export interface HistoryItem {
  paragraph: string;
}

interface PersonHelpProps {
  name: string;
  year: number;
  diagnosis: string;
  history: HistoryItem[];
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

export function PersonHelpItem({
  name,
  year,
  diagnosis,
  history,
  image
}: PersonHelpProps) {
  const [textContainerVisible, setTextContainerVisible] = useState(true);
    const handleToggleTextContainer = () => {
      setTextContainerVisible(!textContainerVisible);
    };

  return (
    <div className={styles.personContainer}>
      <div className={styles.mobileHeader}>
        <p className={styles.personMain}>{name}</p>
        <p className={styles.personMain}>{year} г.р.</p>
        <p className={styles.personDiagnosis}>{diagnosis}</p>
      </div>

      <div>
        <div className={styles.textColumn}>
          <div className={styles.imagesColumn}>
              <img src={image} className={styles.mainImage}/>
                <button className={styles.donationModal}>Помочь ребенку</button>
            </div>
          <div className={styles.desktopHeader}>
            <p className={styles.personMain}>{name}</p>
            <p className={styles.personMain}>{year} г.р.</p>
            <p className={styles.personDiagnosis}>{diagnosis}</p>
          </div>
          <div className={textContainerVisible ? styles.textContainer : ""}>
            {history.map((item, index) => (
              <p key={index} className={styles.historyParagraph}>{item.paragraph}</p>
            ))}
          </div>
          <div className={styles.readMoreContainer}>
            <button className={styles.readMoreButton} onClick={handleToggleTextContainer}            >
              {textContainerVisible ? "Читать дальше" : "Скрыть текст"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
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