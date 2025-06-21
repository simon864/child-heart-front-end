import repostStyle from "./Repost.module.css";
import telegram from "../../assets/images/footer/telegram-logo.svg";
import vk from "../../assets/images/footer/vk-logo.svg";
import ok from "../../assets/images/footer/ok-logo.svg";

export default function RepostLink() {
  return (
    <div className={repostStyle.repostContainer}>
      <p className={repostStyle.repostText}>
        Вы можете сделать репост этой записи
      </p>
      <div className={repostStyle.repostLinkContainer}>
        <img src={telegram} alt="телеграм" />
        <img src={vk} alt="вк" />
        <img src={ok} alt="одноклассники" />
      </div>
    </div>
  );
}
