import React, { useState, useEffect, useRef } from 'react';
import styles from './header.module.css';
import logo from '../../assets/images/logo.svg';
import dropdown from '../../assets/images/dropdown.svg';
import hamburgerIcon from '../../assets/images/hamburger.svg';

const Header: React.FC = () => {
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
    document.addEventListener('click', handleClickOutside); // replace later (allegedly useRef)
    return () => document.removeEventListener('click', handleClickOutside); // replace later (allegedly useRef)
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
          <a href='#'>Главная</a>

          <div className={styles.dropdownList}>
          <button 
              className={styles.dropdownButton} 
              onClick={() => toggleDropdown('nav2')}
            >
              <span>О фонде</span>
              <img src={dropdown} alt="" className={styles.dropdownIcon} />
            </button>
            <div className={`${styles.dropdownItems} ${openDropdown === 'nav2' ? styles.active : ''}`}>
              <a href='#'>О президенте фонда</a>
              <a href='#'>Цели и задачи</a>
              <a href='#'>История</a>
              <a href='#'>Правление</a>
              <a href='#'>Попечительский совет</a>
              <a href='#'>Команда</a>
              <a href='#'>Наши благотвориели</a>
              <a href='#'>Программы фонда</a>
            </div>
          </div>

          <a href='#'>Наши проекты</a>

          <div className={styles.dropdownList}>
          <button 
              className={styles.dropdownButton}
              onClick={() => toggleDropdown('nav4')}
            >
              <span>Помочь фонду</span>
              <img src={dropdown} alt="" className={styles.dropdownIcon} />
            </button>
            <div className={`${styles.dropdownItems} ${openDropdown === 'nav4' ? styles.active : ''}`}>
              <a href='#'>Реквизиты</a>
              <a href='#'>Стать волонтером</a>
              <a href='#'>Ящики для благотворительности</a>
              <a href='#'>Возврат НДФЛ</a>
            </div>
          </div>

          <a href='#'>Контакты</a>
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