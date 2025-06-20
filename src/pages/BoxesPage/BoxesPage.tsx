import styles from "./BoxesPage.module.css"
import { Paragraph } from "./Props";
import { Text } from "./data";
import Title from "../../components/Title/title";

function BoxesPage() {
    return(
        <>
        <Title text="Ящики для благотворительности" />
        <AboutFoundationText />
        <BoxList />
        </>
    )
}
export default BoxesPage

function AboutFoundationText() {
  return (
    <>
    {Text.map((Text) => (
      <Paragraph paragraph={Text.paragraph} />
    ))}
    </>
  );
}

function BoxList() {
  return(
    <div className={styles.boxListContainer}>
      <p>{"Выражаем благодарность неравнодушным людям за доверие и поддержку!\nИ огромное спасибо нашим партнерам за сотрудничество!"}</p>
      <button>Список ящиков в городах Кемеровской области</button>
    </div>
  )
}