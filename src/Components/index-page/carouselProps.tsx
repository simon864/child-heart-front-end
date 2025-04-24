import React from 'react';
import { HelpNeededProps } from './interfaces';
import styles from './helpNeededItem.module.css'

const HelpNeededItem: React.FC<HelpNeededProps> = ({
  name,
  year,
  history,
  toCollect,
  collected,
  image
}) => {
  const remaining = toCollect - collected;

  return (
    <div className={styles.itemContainer}>
      <img 
        src={image} 
        alt={name} 
        className={styles.itemImage}
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'path/to/default/image.png';
        }}
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
          <button className={styles.helpButton}>Хочу помочь</button>
          <span className={styles.readStoryLink}>Читать историю</span>
        </div>
      </div>
    </div>
  );
};

export default HelpNeededItem;