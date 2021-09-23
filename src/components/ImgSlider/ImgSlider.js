import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import "./ImgSlider.css";

const images = [
  {
    original: "img/fardos.jpeg",
    thumbnail: "img/fardos.jpeg",
    originalHeight: 500,
    originalWidth: 500,
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    originalHeight: 500,
    originalWidth: 500,
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    originalHeight: 500,
    originalWidth: 500,
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    originalHeight: 500,
    originalWidth: 500,
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    originalHeight: 500,
    originalWidth: 500,
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    originalHeight: 500,
    originalWidth: 500,
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    originalHeight: 500,
    originalWidth: 500,
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    originalHeight: 500,
    originalWidth: 500,
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    originalHeight: 500,
    originalWidth: 500,
  },
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
