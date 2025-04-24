import Header from '../header/header';
import { HelpNeeded } from './data';
import HelpNeededItem from './carouselProps';
import Carousel from '../carousel/carousel';

function IndexPage() {

  return (
    <>
    <body>

      <Header/>
      <main className='centerAlign'>
      <Carousel
      data={HelpNeeded}
      renderItem={(item) => <HelpNeededItem {...item} />}
    />
      </main>

    </body>
    </>
  )
}

export default IndexPage