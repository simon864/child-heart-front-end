import presidentStyle from "./presidentPage.module.css";
import presidentPhoto from "..//..//assets/images/presidentPage/president-photo.png";
import { text, award } from "./data";
import { ParagraphInfo, AchievementCard } from "./props";
import { useState } from "react";
import Title from "../../components/Title/title";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function PresidentPage() {
  return (
    <ScrollToTop>
      <TitlePresident />
      <Biography />
      <Achievements />
    </ScrollToTop>
  );
}

function TitlePresident() {
  const sliceArrayTitle = text.slice(0, 2);

  return (
    <>
      <Title text="О президенте фонда “Детское сердце”" />
      <div className={presidentStyle.titleText}>
        {sliceArrayTitle.map((sliceArrayTitle, index) => (
          <ParagraphInfo key={index} paragraph={sliceArrayTitle.paragraph} />
        ))}
      </div>
    </>
  );
}

function Biography() {
  const sliceArrayText = text.slice(2);
  const [textContainerVisible, setTextContainerVisible] = useState(true);
  const handleToggleTextContainer = () => {
    setTextContainerVisible(!textContainerVisible);
  };

  return (
    <div className={presidentStyle.biographyContainer}>
      <p className={presidentStyle.biographyTitle}>
        Основные факты биографии действующего президента
      </p>
      <div className={presidentStyle.photoContainer}>
        <img
          className={presidentStyle.photo}
          src={presidentPhoto}
          alt="President Photo"
        />
      </div>
      <div className={textContainerVisible ? presidentStyle.textContainer : ""}>
        {sliceArrayText.map((sliceArrayText, index) => (
          <ParagraphInfo key={index} paragraph={sliceArrayText.paragraph} />
        ))}
      </div>
      <div className={presidentStyle.readMoreContainer}>
        <button
          className={presidentStyle.readMoreButton}
          onClick={handleToggleTextContainer}
        >
          {textContainerVisible ? "Читать дальше" : "Скрыть текст"}
        </button>
      </div>
    </div>
  );
}

function Achievements() {
  return (
    <div className={presidentStyle.achievementsContainer}>
      <p className={presidentStyle.achievementTitle}>
        Достижения О.Л. Барбараш в сфере образования и науки отмечены
        профессиональными наградами и благодарностями
      </p>
      <div className={presidentStyle.achievementGrid}>
        {award.map((award, index) => (
          <AchievementCard key={index} title={award.title} year={award.year} />
        ))}
      </div>
    </div>
  );
}
