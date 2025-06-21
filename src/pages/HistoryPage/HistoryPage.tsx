import { Text, HistoryImages } from "./data";
import Title from "../../components/title/title";
import { Paragraph, ImageItemCarousel, ImageItemCard } from "./Props";
import styles from "./HistoryPage.module.css"
import { useState } from "react";
import { Caorusel } from "../../components/CarouselHome/CarouselHome";

function HistoryPage() {
    return (
        <>
        <Title text='История фонда "Детское сердце"' />
        <HistoryCarousel />
        <HistoryText />
        </>
    )
}
export default HistoryPage

function HistoryCarousel() {
  return (
    <div className={styles.historyCarousel}>
        <Caorusel>
          {HistoryImages.map((HistoryImages) => (
            <ImageItemCarousel image={HistoryImages.image} />
          ))}
        </Caorusel>
      </div>
  );
}

function HistoryCards1() {
  const SliceImages1 = HistoryImages.slice(0, 3);
  return (
    <div className={styles.historyCards}>
      {SliceImages1.map((SliceImage) => (
        <ImageItemCard image={SliceImage.image} />
      ))}
    </div>
  )
}

function HistoryCards2() {
  const SliceImages2 = HistoryImages.slice(3);
  return (
    <div className={styles.historyCards}>
      {SliceImages2.map((SliceImage) => (
        <ImageItemCard image={SliceImage.image} />
      ))}
    </div>
  )
}

function HistoryText() {
  const SliceText1 = Text.slice(0, 2);
  const SliceText2 = Text.slice(2, 4);
  const SliceText3 = Text.slice(4);
  const [textContainerVisible, setTextContainerVisible] = useState(true);
    const handleToggleTextContainer = () => {
      setTextContainerVisible(!textContainerVisible);
    };

  return (
    <>
      <div className={textContainerVisible ? styles.textContainer : ""}>
        {SliceText1.map((SliceText) => (
          <Paragraph paragraph={SliceText.paragraph} />
        ))}
        <HistoryCards1 />
        {SliceText2.map((SliceText) => (
          <Paragraph paragraph={SliceText.paragraph} />
        ))}
        <HistoryCards2 />
        {SliceText3.map((SliceText) => (
          <Paragraph paragraph={SliceText.paragraph} />
        ))}
      </div>
      <div className={styles.readMoreContainer}>
        <button
          className={styles.readMoreButton}
          onClick={handleToggleTextContainer}
        >
          {textContainerVisible ? "Читать дальше" : "Скрыть текст"}
        </button>
      </div>
    </>
  );
}