import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css'
import logo from '../../assets/images/common/logo.svg';
import dropdown from '../../assets/images/icons/dropdown.svg';
import hamburgerIcon from '../../assets/images/icons/hamburger.svg';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!(event.target as Element).closest(`.${styles.dropdownList}`)) {
      setOpenDropdown(null);
    }
    
    if (navRef.current && 
        !navRef.current.contains(event.target as Node) && 
        !hamburgerRef.current?.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} />
        <p className={styles.logoText}>
          <span>Кузбасский </span>
          <span>благотворительный </span>
          <span>фонд </span>
        </p>
      </div>

      <div className={styles.rightSection}>
        <div className={`${styles.navigationItems} ${isMenuOpen ? styles.active : ''}`} ref={navRef}>
          <a><Link to={"/HomePage"}>Главная</Link></a>

          <div className={styles.dropdownList}>
          <button 
              className={styles.dropdownButton} 
              onClick={() => toggleDropdown('nav2')}
            >
              <span>О фонде</span>
              <img src={dropdown} alt="" className={styles.dropdownIcon} />
            </button>
            <div className={`${styles.dropdownItems} ${openDropdown === 'nav2' ? styles.active : ''}`}>
              <a><Link to={"/president-page"}>О президенте фонда</Link></a>
              <a><Link to={"/objectives-page"}>Цели и задачи</Link></a>
              <a><Link to={""}>История</Link></a>
              <a><Link to={"/board-page"}>Правление</Link></a>
              <a><Link to={"/council-page"}>Попечительский совет</Link></a>
              <a><Link to={"/team-page"}>Команда</Link></a>
              <a><Link to={"/philanthopists-page"}>Наши благотвориели</Link></a>
              <a><Link to={"/program-page"}>Программы фонда</Link></a>
              <a><Link to={"/reports-page"}>Отчеты и документы</Link></a>
            </div>
          </div>

          <a><Link to={""}>Наши проекты</Link></a>

          <div className={styles.dropdownList}>
          <button 
              className={styles.dropdownButton}
              onClick={() => toggleDropdown('nav4')}
            >
              <span>Помочь фонду</span>
              <img src={dropdown} alt="" className={styles.dropdownIcon} />
            </button>
            <div className={`${styles.dropdownItems} ${openDropdown === 'nav4' ? styles.active : ''}`}>
              <a><Link to={""}>Реквизиты</Link></a>
              <a><Link to={""}>Стать волонтером</Link></a>
              <a><Link to={""}>Ящики для благотворительности</Link></a>
              <a><Link to={""}>Возврат НДФЛ</Link></a>
            </div>
          </div>

          <a><Link to={""}>Контакты</Link></a>
        </div>

        <div className={styles.headerButtons}>
          <button className={`${styles.buttonSecondary} ${styles.helpNow}`}>Хочу помочь</button>
          <button className={`${styles.buttonSecondary} ${styles.volunteer}`}>Нужна помощь</button>
        </div>
      </div>

      <button 
        ref={hamburgerRef}
        className={styles.hamburger} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation"
      >
        <img 
          src={hamburgerIcon} 
          alt="Menu" 
          className={styles.hamburgerImage}
        />
      </button>
    </header>
  );
};

export default Header;