import styles from "./TitleRequisites.module.css";
import qrCode from "../../assets/images/common/qr-code.png";

interface TitleProps {
  text: string;
  subText: string;
}

export default function TitleRequisites({ text, subText }: TitleProps) {
  return (
    <div className={styles.title}>
      <div className={styles.ssContainer}>
        <span className={styles.ssText}>{text}</span>
        <span className={styles.ssSubText}>{subText}</span>
      </div>
      <img src={qrCode} alt="QR CODE" />
    </div>
  );
}
