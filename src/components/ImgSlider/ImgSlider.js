import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "./ImgSlider.css";

const images = [
  {
    original: "img/caballos/antes1.jpg",
    thumbnail: "img/caballos/antes1.jpg",
    originalHeight: 600,
    originalWidth: 600,
  },
  {
    original: "img/caballos/despues3.webp",
    thumbnail: "img/caballos/despues3.webp",
    originalHeight: 600,
    originalWidth: 600,
  },
  {
    original: "img/caballos/despues3_2.webp",
    thumbnail: "img/caballos/despues3_2.webp",
    originalHeight: 600,
    originalWidth: 600,
  },
  {
    original: "img/caballos/antes2.jpg",
    thumbnail: "img/caballos/antes2.jpg",
    originalHeight: 600,
    originalWidth: 600,
  },
  {
    original: "img/caballos/despues2.jpg",
    thumbnail: "img/caballos/despues2.jpg",
    originalHeight: 600,
    originalWidth: 600,
  },
  {
    original: "img/caballos/despues2_2.jpg",
    thumbnail: "img/caballos/despues2_2.jpg",
    originalHeight: 600,
    originalWidth: 600,
  }
];

function ImgSlider() {
  const [position, setPosition] = useState("left");

  useEffect( () => {
    let mounted = true;
    if(mounted){
      calcularPosicion();
    }
    return () => {
      mounted = false;
      setPosition("left");
    };
  }, []);

  const calcularPosicion = () => {
    if (window.innerWidth < 684) {
      setPosition("bottom");
    }
  };

  return (
    <div className="image_slider_container">
      <div className="image_slider_content">
        <div className="image_slider_title_container">
          <h1 className="image_slider_title">Premium<span className="image_slider_title_span">Fodder</span></h1>
        </div>
        <ImageGallery
          items={images}
          thumbnailPosition={position}
          showPlayButton="false"
          showBullets="true"
        />
      </div>
    </div>
  );
}

export default ImgSlider;
