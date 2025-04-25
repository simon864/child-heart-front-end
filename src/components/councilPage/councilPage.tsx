import Title from "../title/title";
import councilStyle from "./councilPage.module.css";
import { text } from "./data";
import { CouncilInfo } from "./props";

export default function CouncilPage() {
  return (
    <>
      <Title text="Попечительский совет" />
      <CouncilContent />
    </>
  );
}

export function CouncilContent() {
  return (
    <div className={councilStyle.contentContainer}>
      {text.map((text, index) => (
        <CouncilInfo key={index} name={text.name} post={text.post} />
      ))}
    </div>
  );
}
