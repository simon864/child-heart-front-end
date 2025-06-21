import reportsStyle from "./reportsPage.module.css";
import Title from "../../components/Title/title";
import { textLinks } from "./data";
import { ReportsLinks } from "./props";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function ReportsPage() {
  return (
    <ScrollToTop>
      <Title text={"Отчеты"} />
      <ReportsContent />
    </ScrollToTop>
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
