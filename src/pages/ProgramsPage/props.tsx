
import Caorusel from "../../components/caorusel/caorusel";
import programsStyle from "./programPage.module.css";
import { useState } from "react";

export interface ImageProps {
  id: number;
  src: string;
}

interface ImagesCardProps {
  images: ImageProps[];
}

export function ImagesCard({ images }: ImagesCardProps) {
  return (
    <>
      <Caorusel dotsPlacement="onImage">
        {images.map((image) => (
          <div className={programsStyle.imageContainer} key={image.id}>
            <img src={image.src} alt="Фото" />
          </div>
        ))}
      </Caorusel>
    </>
  );
}

interface TextCard {
  id: number;
  task: string;
}

interface TextCardProps {
  title: string;
  description: string;
  tasks: TextCard[];
}

export function TextCard({ tasks, title, description }: TextCardProps) {
  const [textContainerVisible, setTextContainerVisible] = useState(true);
  const handleToggleTextContainer = () => {
    setTextContainerVisible(!textContainerVisible);
  };
  return (
    <div className={programsStyle.cardInfo}>
      <div
        className={
          textContainerVisible
            ? programsStyle.textContainer
            : programsStyle.textContainer2
        }
      >
        <p className={programsStyle.titleText}> {title} </p>
        <p> {description} </p>
        {tasks.map((task) => (
          <p key={task.id}> {task.task} </p>
        ))}
      </div>
      <div className={programsStyle.readMoreContainer}>
        <button
          className={programsStyle.readMoreButton}
          onClick={handleToggleTextContainer}
        >
          {textContainerVisible ? "Читать дальше" : "Скрыть текст"}{" "}
        </button>
      </div>
    </div>
  );
}
