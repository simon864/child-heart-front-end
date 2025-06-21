import styles from "./RequisitesPage.module.css"
import { Paragraph } from "./Props";
import { Text } from "./data";
import TitleRequisites from "../../components/TitleRequisites/TitleRequisites";

function RequisitesPage() {
    return(
        <>
        <TitleRequisites text="Реквизиты фонда" subText="Если каждый из Вас сделает даже небольшой личный вклад, то здоровых и счастливых детей в Кузбассе станет больше." />
        <p className={styles.secondaryTitle}>Наши реквизиты</p>
        <AboutFoundationText />
        </>
    )
}
export default RequisitesPage

function AboutFoundationText() {
  return (
    <>
    {Text.map((Text) => (
      <Paragraph paragraph={Text.paragraph} />
    ))}
    </>
  );
}