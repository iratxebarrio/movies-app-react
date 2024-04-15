

import { MoviesToday } from "../components/MoviesToday/MoviesToday"
import { Slider } from "../components/Slider/Slider";
import { Navbar } from "../core/Header/components/Navbar"




export const Home = () => {


  return (
    <>
        {/* <Header/> */}
        <Navbar />
 
        <Slider/>
        <MoviesToday/>


    </>
  )
}
