import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  images: string[];
};

const PostImages: React.FC<Props> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    
  };

  return (
      <div className="slider-container w-100 overflow-hidden">
      <Slider {...settings}>
        {images.map((img: string, index: number) => {
          return (
                <img
                  src={img}
                  className="user-post-img"
                  style={{ height: 'clamp(60px, 4vw, 100px)' }}
                  alt=""
                  key={index}
                />
          );
        })}
      </Slider>
      </div>
  );
};

export default PostImages;