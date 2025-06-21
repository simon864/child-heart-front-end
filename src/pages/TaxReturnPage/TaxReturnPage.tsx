import styles from "./TaxReturnPage.module.css"
import { Paragraph, BulletPoint } from "./Props";
import { Text } from "./data";
import Title from "../../components/Title/title";

function TaxReturnPage() {
    return(
        <>
        <Title text="Возврат НДФЛ" />
        <p className={styles.secondaryTitle}>Возврат НДФЛ, социальный вычет по расходам на благотворительность</p>
        <AboutFoundationText1 />
        <BulletPointList />
        <AboutFoundationText2 />
        </>
    )
}
export default TaxReturnPage

function AboutFoundationText1() {
  const SliceText1 = Text.slice(0, 1);

  return (
    <>
    {SliceText1.map((SliceText) => (
      <Paragraph paragraph={SliceText.paragraph} />
    ))}
    </>
  );
}

function BulletPointList() {
  const SliceText2 = Text.slice(1, 6);

  return (
    <ul className={styles.paragraphContainer}>
    {SliceText2.map((SliceText) => (
      <BulletPoint paragraph={SliceText.paragraph} />
    ))}
    </ul>
  );
}

function AboutFoundationText2() {
  const SliceText3 = Text.slice(6);
  return (
    <>
    {SliceText3.map((SliceText) => (
      <Paragraph paragraph={SliceText.paragraph} />
    ))}
    </>
  );
}