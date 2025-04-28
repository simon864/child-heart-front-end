import titleStyle from "./title.module.css";
import qrCode from "../../assets/images/common/qr-code.png";

interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <div className={titleStyle.title}>
      <span className={titleStyle.ssText}>{text}</span>
      <img src={qrCode} alt="QR CODE" />
    </div>
  );
}
