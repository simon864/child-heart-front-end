import councilStyle from "./councilPage.module.css";
import { CouncilInfoProps } from "./interfaces";

export function CouncilInfo({ name, post }: CouncilInfoProps) {
  return (
    <>
      <div className={councilStyle.nameContainer}>
        <p>{name}</p>
      </div>
      <div className={councilStyle.postContainer}>
        <span>{post}</span>
      </div>
    </>
  );
}
