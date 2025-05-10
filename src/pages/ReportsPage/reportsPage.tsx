import reportsStyle from "./reportsPage.module.css";
import Title from "../../components/title/title";
import { textLinks } from "./data";
import { ReportsLinks } from "./props";

export default function ReportsPage() {
  return (
    <>
      <Title text={"Отчеты"} />
      <ReportsContent />
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
