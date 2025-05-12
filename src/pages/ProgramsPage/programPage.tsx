import Title from "../../components/Title/title";
import programsStyle from "./programPage.module.css";
import { imageArr, textArr } from "./data";
import { ImagesCard, TextCard } from "./props";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function ProgramPage() {
  return (
    <ScrollToTop>
      <Title text="Наши программы" />
      <ProgramContent />
    </ScrollToTop>
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
