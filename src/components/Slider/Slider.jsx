import images from "../../exports/images";
import { useEffect, useState, useRef } from "react";

import { 
  SliderContainer, 
  SliderHeadings, 
  SliderTitle, 
  SliderWrapper, 
  InnerCarousel, 
  SliderCard,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardImg,
  Image,
  CardFooter

} from "./SliderStyles";


export const Slider = () => {

    const [width, setWidth] = useState(0);
    const slider_wrapper = useRef();
    useEffect(() => {
     setWidth(slider_wrapper.current.scrollWidth - slider_wrapper.current.offsetWidth)
    }, [])
    

  
  return (
    <SliderContainer>
      <SliderHeadings>
        <SliderTitle>Horizontal image carousel</SliderTitle>
      </SliderHeadings>
      <SliderWrapper ref={slider_wrapper} whileTap={{cursor: "grabbing"}}>
        <InnerCarousel
         drag='x'
         dragConstraints={{right: 0, left: -width}}
         >
          {images.map((image) => (
            <SliderCard>
              <CardHeader>
                <CardTitle >Avatar: The way of water</CardTitle>
                <CardSubtitle>James Cameron</CardSubtitle>
              </CardHeader>
              <CardImg>
                <Image src={image} alt=""  />
              </CardImg>
              <CardFooter>
                <i className="fa fa-dowload"></i>
                <i className="fa fa-heart"></i>
                <i className="fa fa-share"></i>
              </CardFooter>
            </SliderCard>
          ))}
        </InnerCarousel>
      </SliderWrapper>
    </SliderContainer>
  );
};
