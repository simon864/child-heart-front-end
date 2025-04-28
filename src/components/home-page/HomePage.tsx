import { HelpNeeded, OurProjects, Helped, News } from './data';
import HeroBackground, { HelpNeededItem, OurProjectsItem, HelpedItem, NewsItem } from './Props';
import ResponsiveCarousel, { Caorusel } from '../carousel/Carousel';
import Title from '../title/title';
import styles from './HomePage.module.css'
import background from '../../assets/images/home-page/background.png'

function HomePage() {
  return (
    <>
    <HeroBackground 
        imageUrl={background}
        contentBelow={
          <div className={styles.centerAlign}>
            <HelpNeededCarousel/>
            <HelpedCards/>
            <OurProjectsCarousel/>
            <NewsCards/>
          </div>
        }
      >
        <Title text="Возвращаем здоровье детским сердцам"/>
      </HeroBackground>
    </>
  )
}
export default HomePage

function HelpNeededCarousel() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Нужна помощь</h2>
        <a href="#" className={styles.readMoreLink}>Читать больше</a>
      </div>
      <div className={styles.helpNeededCarousel}>
        <ResponsiveCarousel>
          {HelpNeeded.map((HelpNeeded) => (
            <HelpNeededItem
              key={HelpNeeded.name}
              name={HelpNeeded.name}
              year={HelpNeeded.year}
              history={HelpNeeded.history}
              toCollect={HelpNeeded.toCollect}
              collected={HelpNeeded.collected}
              image={HelpNeeded.image}
            />
          ))}
        </ResponsiveCarousel>
      </div>
    </div>
  )
}

function HelpedCards() {
  return(
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Помогли</h2>
        <a href="#" className={styles.readMoreLink}>Читать больше</a>
      </div>
      <div className={styles.helpedCards}>
        {Helped.map((Helped) => (
          <HelpedItem
            key={Helped.name}
            name={Helped.name}
            year={Helped.year}
            image={Helped.image}
          />
        ))}
      </div>
    </div>
  )
}

function OurProjectsCarousel() {
  return(
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Наши проекты</h2>
        <a href="#" className={styles.readMoreLink}>Читать больше</a>
      </div>
      <div className={styles.ourProjectsCarousel}>
        <Caorusel>
          {OurProjects.map((OurProjects) => (
            <OurProjectsItem
              key={OurProjects.image}
              image={OurProjects.image}
            />
          ))}
        </Caorusel>
      </div>
    </div>
  )
}

function NewsCards() {
  return(
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Новости</h2>
        <a href="#" className={styles.readMoreLink}>Читать больше</a>
      </div>
      <div className={styles.newsCards}>
        {News.map((News) => (
          <NewsItem
            key={News.headline}
            date={News.date}
            headline={News.headline}
            image={News.image}
          />
        ))}
      </div>
    </div>
  )
}