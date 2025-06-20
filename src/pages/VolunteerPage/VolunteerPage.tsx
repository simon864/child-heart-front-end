import styles from "./VolunteerPage.module.css"
import { Paragraph } from "./Props";
import { Text } from "./data";
import Title from "../../components/Title/title";

function VolunteerPage() {
    return(
        <>
        <Title text="Как стать волонтером фонда" />
        <p className={styles.secondaryTitle}>Как стать волонтёром Кузбасского благотворительного фонда «Детское сердце»</p>
        <AboutFoundationText />
        </>
    )
}
export default VolunteerPage

function AboutFoundationText() {
  return (
    <>
    {Text.map((Text) => (
      <Paragraph paragraph={Text.paragraph} />
    ))}
    </>
  );
}