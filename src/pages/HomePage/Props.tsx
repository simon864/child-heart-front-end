import { Link } from "react-router-dom";
import styles from "./HomePage.module.css"

interface BackgroundProps {
  children?: React.ReactNode;
  contentBelow?: React.ReactNode;
  image: string;
}

interface HelpNeededProps {
  name: string;
  year: number;
  history: string;
  toCollect: number;
  collected: number;
  image: string;
}

interface HelpedProps {
  name: string;
  year: number;
  image: string;
}

interface OurProjectsProps {
  image: string;
}

interface NewsProps {
  date: string;
  headline: string;
  image: string;
}

export default function HeroBackground ({ 
  children, 
  contentBelow,
  image 
} : BackgroundProps) {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroContainer}>
        <div 
          className={styles.heroImage}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={styles.heroContent}>
            {children}
          </div>
        </div>
      </div>
      <div className={styles.contentBelow}>
        {contentBelow}
      </div>
    </div>
  )
}

export function HelpNeededItem({
  name,
  year,
  history,
  toCollect,
  collected,
  image
}: HelpNeededProps) {
  const remaining = toCollect - collected;

  return (
    <div className={styles.itemContainerHelp}>
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
          <span className={styles.readStoryLink}><Link to={"#"}>Читать историю</Link></span>
        </div>
      </div>
    </div>
  )
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

export function OurProjectsItem({image}: OurProjectsProps) {
  return (
    <Link to={"#"}>
    <img
      src={image}
      className={styles.singleImage}
    />
    </Link>
  )
}

export function NewsItem({ date, headline, image }: NewsProps) {
  return (
    <>
      <div className={styles.itemContainer}>
        <img 
          src={image}
          className={styles.itemImage}
        />
        
        <div className={styles.contentContainer}>
          <div className={styles.nameYearContainer}>
            <span className={styles.history}>{date}</span>
            <span className={styles.name}>{headline}</span>
          </div>
        </div>
      </div>
    </>
  )
}