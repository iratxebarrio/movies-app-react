import styled from "styled-components";

export const Nav = styled.nav`
background-color: ${({theme}) => theme.bgc};
    width: 100%;    
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center; /* Para centrar verticalmente los elementos */

    .logo {
        padding: 15px 0;
        width: 70px;
    }


`;

export const StyledBurguer = styled.div `
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 34px;
    right: 20px;
    z-index: 20;

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${({open}) => open ? '#ccc' : '#333' };
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }
      &:nth-child(2) {
        transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({open}) => open ? 0 : 1};
      }
      &:nth-child(3) {
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }

    @media (min-width: 768px) {
        display: none; /* Ocultar el botón de menú en pantallas grandes */
    }
`;

export const Ul = styled.ul `
    list-style: none;
    background-color: ${({theme}) => theme.bgc};
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({open} ) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem; 
    transition: transform 0.3s ease-in-out;

    li {
        color: #fff;
    }

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: flex-end; /* Alinear los elementos al final */
        position: static;
        background-color: ${({theme}) => theme.bgc};
        height: auto;
        width: 100%;
        transform: none;
        transition: none;
        margin-bottom: 45px;

        li {
            padding: 18px 10px;
            color: black;
        }
    }
`;

export const TranslateContainer = styled.div `
 display: flex;
 align-items: center;
 justify-content: center;


 @media (min-width: 768px ) { 

   align-items: center;
  }

`;
export const TranslateButton = styled.button `
  padding: 0.5rem 1rem;
  border: none;
  background-color: white;
  border-radius: 5px;

`;