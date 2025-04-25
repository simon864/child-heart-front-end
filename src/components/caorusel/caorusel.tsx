import Slider from "react-slick";

interface CaoruselProps {
  children?: React.ReactNode;
}

export default function Caorusel({ children }: CaoruselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return <Slider {...settings}>{children}</Slider>;
}
