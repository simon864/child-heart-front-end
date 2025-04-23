import reportsStyle from "./reportsPage.module.css";
import Title from "../title/title";
import { textLinks } from "./data";
import { ReportsLinks } from "./props";

export default function ReportsPage() {
  return (
    <>
      <div className={reportsStyle.reportsPage}>
        <Title text={"Отчеты"} />
        <ReportsContent />
      </div>
    </>
  );
}

function ReportsContent() {
  return (
    <>
      <div className={reportsStyle.reportsContainer}>
        {textLinks.map((textLinks, index) => (
          <ReportsLinks
            key={index}
            text={textLinks.text}
            link={textLinks.link}
          />
        ))}
        <button className={reportsStyle.documentsButton}>
          Уставные документы
        </button>
      </div>
    </>
  );
}
