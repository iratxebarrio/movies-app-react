
import { Nav } from "../headerStyles"
import { Burguer } from "./Burguer"
import { Translation } from "./Translation"


export const Navbar = () => {
  return (
    <Nav>
       <div className="logo">
        Nav Bar
       </div>
       <Burguer/>
       {/* <Translation/> */}

    </Nav>
  )
}
