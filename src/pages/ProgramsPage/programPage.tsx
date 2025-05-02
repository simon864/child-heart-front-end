import Title from "../../components/Title/title";
import programsStyle from "./programPage.module.css";
import { imageArr, textArr } from "./data";
import { ImagesCard, TextCard } from "./props";

export default function ProgramPage() {
  return (
    <>
      <Title text="Наши программы" />
      <ProgramContent />
    </>
  );
}

function ProgramContent() {
  return (
    <>
      <div className={programsStyle.contentContainer}>
        {imageArr.map((images, index) => {
          const text = textArr[index];

          return (
            <div className={programsStyle.cardContainer} key={images.id}>
              <div className={programsStyle.caoruselContainer}>
                <ImagesCard images={images.images} />
              </div>
              {text && (
                <TextCard
                  title={text.title}
                  description={text.description}
                  tasks={text.tasks}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
