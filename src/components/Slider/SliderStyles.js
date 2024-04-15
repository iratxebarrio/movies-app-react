import styled from "styled-components";
import { motion } from "framer-motion";

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 100rem;
  background: linear-gradient(320deg, #f27121, #e94057, #8a2387);
  flex-direction: column;
`;
export const SliderHeadings = styled.div`
  width: 95%;
  margin-bottom: .5rem;
  @media (min-width: 768px ) { 
    width: 60%;
   }
`;

export const SliderTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding: 0;
  color: #fff;

  @media (min-width: 768px ) { 
    font-size: 3rem;
   }

`;

export const SliderWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  overflow: hidden;
  padding: 2rem;
`;

export const InnerCarousel = styled(motion.div)`
  display: inline-flex;
`;

export const SliderCard = styled.div`
  width: 30rem;
  background: rgba(255, 255, 255, 0);
  border-radius: 1.6rem;
  backdrop-filter: bl(2rem);
  padding: 3rem 2rem;
  box-shadow: 0 .3rem .6rem rgba(0, 0, 0, 0.16), 0 .3rem .6rem rgba(0, 0, 0, 0.23);
  pointer-events: none;
`;
export const CardHeader = styled.div`
  margin-bottom: 1.6rem;
`;
export const CardTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #000;

`;
export const CardSubtitle = styled.p`
    font-size: 1.5rem;
    color: #eee;
`;
export const CardImg = styled.div`
  width: 100%;
  height: 25rem;
  display: block;
  border-radius: 1.6rem;
  overflow: hidden;
  margin-bottom: 3.2rem;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
export const CardFooter = styled.div`
  color: #bdbdbd;
  display: flex;
`;
