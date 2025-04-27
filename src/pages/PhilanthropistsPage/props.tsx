import philanthropistsStyles from "./PhilanthropistsPage.module.css";
import { useState } from "react";

interface TextCardProps {
  id: number;
  paragraph: string;
}

interface PhilanthropistCardProps {
  image: string;
  title: string;
  text: TextCardProps[];
}

export function PhilanthropistCard({
  image,
  title,
  text,
}: PhilanthropistCardProps) {
  const [textContainerVisible, setTextContainerVisible] = useState(true);
  const handleToggleTextContainer = () => {
    setTextContainerVisible(!textContainerVisible);
  };
  return (
    <div className={philanthropistsStyles.cardContainer}>
      <div className={philanthropistsStyles.logoContainer}>
        <img src={image} alt="Logo" />
      </div>
      <div className={philanthropistsStyles.cardInfo}>
        <div
          className={
            textContainerVisible
              ? philanthropistsStyles.textContainer
              : philanthropistsStyles.textContainer2
          }
        >
          <p className={philanthropistsStyles.titleText}> {title} </p>
          {text.map((text) => (
            <p key={text.id}> {text.paragraph} </p>
          ))}
        </div>
        <div className={philanthropistsStyles.readMoreContainer}>
          <button
            className={philanthropistsStyles.readMoreButton}
            onClick={handleToggleTextContainer}
          >
            {textContainerVisible ? "Читать дальше" : "Скрыть текст"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
