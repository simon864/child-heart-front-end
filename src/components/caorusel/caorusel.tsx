import Slider from "react-slick";

interface CaoruselProps {
  children: React.ReactNode;
  dotsPlacement?: "onImage" | "belowImage";
}

export default function Caorusel({
  children,
  dotsPlacement = "belowImage",
}: CaoruselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>{children}</Slider>
      {dotsPlacement === "onImage" && (
        <style>{`
                .slick-dots {
                  position: absolute;
                  bottom: 20px; /* Поднимаем немного выше */
                  left: 0;
                  width: 100%;
                  text-align: center;
                  z-index: 10; /* Убедитесь, что точки выше изображения */
                }

                .slick-dots li {
                  display: inline-block;
                  margin: 0 6px; /* Увеличиваем расстояние между точками */
                }
              `}</style>
      )}
      {dotsPlacement === "belowImage" && (
        <style>{`
                .slick-dots {
                  text-align: center;
                  margin-top: 15px; /* Увеличиваем расстояние */
                }
              `}</style>
      )}
    </div>
  );
}
