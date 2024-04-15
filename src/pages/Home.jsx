

import { Carousel } from "../components/Carousel/Carousel";
import { MoviesToday } from "../components/MoviesToday/MoviesToday"


import { Slider } from "../components/Slider/Slider";
import { Navbar } from "../core/Header/components/Navbar"
import { HomeContainer } from "./HomeStyles";




export const Home = () => {


  return (
    <HomeContainer>
        {/* <Header/> */}
        <Navbar />
 <Carousel/>
        {/* <Slider/> */}
   
        <MoviesToday/>


    </HomeContainer>
  )
}
