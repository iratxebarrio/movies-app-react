import { MoviesToday } from "../components/MoviesToday/MoviesToday"
import { Header } from "../core/Header/Header"
import { Navbar } from "../core/Header/components/Navbar"


export const Home = () => {

  return (
    <>
        {/* <Header/> */}
        <Navbar/>
        <MoviesToday/>

    </>
  )
}
