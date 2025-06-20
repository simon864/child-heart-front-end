import styles from "./PersonHelpPage.module.css"
import { Link } from "react-router-dom";

export interface HistoryItem {
  paragraph: string;
}

export interface ImageData {
  image: string;
  alt?: string;
}

interface PersonHelpProps {
  name: string;
  year: number;
  diagnosis: string;
  history: HistoryItem[];
  images: ImageData[];
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
  images
}: PersonHelpProps) {
  const mainImage = images[0];
  const additionalImages = images.slice(1);

  return (
    <div className={styles.personContainer}>
      <div className={styles.personHeader}>
        <h1 className={styles.personName}>{name}</h1>
        <div className={styles.personMeta}>
          <span className={styles.personYear}>{year}</span>
          <span className={styles.personDiagnosis}>{diagnosis}</span>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.imagesColumn}>
          <img 
            src={mainImage.image} 
            className={styles.mainImage} 
          />
          
          {additionalImages.length > 0 && (
            <div className={styles.additionalImages}>
              {additionalImages.map((img, index) => (
                <img 
                  key={index} 
                  src={img.image}
                  className={styles.additionalImage}
                />
              ))}
            </div>
          )}
        </div>

        <div className={styles.textColumn}>
          {history.map((item, index) => (
            <p key={index} className={styles.historyParagraph}>{item.paragraph}</p>
          ))}
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