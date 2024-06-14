import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1
  };

  const slideStyle = {
    width: "100%",
    height: "50vh",
    objectFit: "cover",

  };

  return (
    <div style={{overflow:"hidden"}}>
    <Slider {...settings}>
      <div>
        <img
          src="https://t3.ftcdn.net/jpg/01/23/50/42/360_F_123504209_4NkjQues2cPzrLsrxq7ULUhxAwuGBtd6.jpg"
          alt="Slide 1"
          style={slideStyle}
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?cs=srgb&dl=pexels-pixabay-139398.jpg&fm=jpg"
          alt="Slide 2"
          style={slideStyle}
        />
      </div>
     
    </Slider>
    </div>
    
  );
}

export default Carousel;
