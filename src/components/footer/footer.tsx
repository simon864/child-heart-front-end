import footerStyle from "./footer.module.css"
import logo from '../../assets/images/footer/logo.svg';
import telegram from '../../assets/images/footer/telegram-logo.svg';
import vk from '../../assets/images/footer/vk-logo.svg';
import ok from '../../assets/images/footer/ok-logo.svg';
import phone from '../../assets/images/footer/phone-icon.svg';
import mail from '../../assets/images/footer/mail-icon.svg';
import geo from '../../assets/images/footer/geo-icon.svg';

export default function Footer() {
    return (
        <footer>
            <div className={footerStyle.mainContent}>
                <div className={footerStyle.logoInfo}>
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className={footerStyle.rights}>
                        <p>© 2011-2016 Детское сердце. <br />
                        Все права защищены.</p>
                        <p>Договор оферты</p>
                    </div>
                </div>
                <div className={footerStyle.contactInfo}>
                    <div className={footerStyle.iconContainer}>
                        <img src= {telegram} alt="Telegram" />
                        <img src= {vk} alt="VK" />
                        <img src= {ok} alt="OK" />
                    </div>
                    <div className={footerStyle.info}>
                        <div className="phone-number1">
                            <img src= {phone} alt="phone" />
                            <span>+7 (3842) 64-42-45</span>
                        </div>
                        <div className="phone-number2">
                            <img src= {phone} alt="phone" />
                            <span>+7 (913) 304-42-45</span>
                        </div>
                        <div className="mail">
                            <img src= {mail} alt="mail" />
                            <span>mail@mail.ru</span>
                        </div>
                        <div className="geo">
                            <img src= {geo} alt="geo" />
                            <span>Адрес</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}