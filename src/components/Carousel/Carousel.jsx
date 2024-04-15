import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'
import { IMAGE_URL } from "../../services/constants";

export const Carousel = ({data}) => {
  console.log(data)



  // TODO: Añadir imagen por defecto si no viene imagen en api
  // TODO: Ajustar tamaños

  const settings = {
    dots: true, //puntos de abajo
    infinite: true,
 
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <>
    {data && data.length > 0 && (
      //Comprobación para evitar flechas de más, evita que se renderice el Slider sin datos
    <div className="App">
      <Slider {...settings}>
        {data?.map((movie) => (
          <div className="card">
            <div className="card-top">
              <img
                src={
                  
                  `${IMAGE_URL}${movie.backdrop_path}`
                }
                alt={movie.title}
                />
              <h1>{movie.title ? movie.title : movie.name}</h1>
            </div>
            <div className="card-bottom">
              <h3>{movie.popularity}</h3>
              <span className="category">{movie.overview}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    )}
        </>
  );
}