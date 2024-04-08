import { useState } from "react";
import {  StyledBurguer } from "../headerStyles";
import { RightNav } from "./RightNav";

export const Burguer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurguer open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurguer>
      <RightNav open={open} />
    </>
  );
};
