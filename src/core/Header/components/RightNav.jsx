import { Ul } from "../headerStyles"


export const RightNav = ({open}) => {
  return (
    <Ul open={open}>
    <li>Home</li>
    <li>Series</li>
    <li>Films</li>
    <li>People</li>
   </Ul>
  )
}
