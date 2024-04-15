import styled from "styled-components";
import { motion } from "framer-motion";

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(320deg, #f27121, #e94057, #8a2387);
  flex-direction: column;
`;
export const SliderHeadings = styled.div`
  width: 60%;
  margin-bottom: 2vw;

  @media (max-width: 416px) {
    width: 95%;
  }
`;
export const SliderTitle = styled.h1`
  font-size: 3vw;
  text-align: center;
  padding: 0 20px;
  color: #fff;
  text-decoration: underline;
  text-decoration-color: #f27121;
  text-underline-offset: 0.5vw;
  @media (max-width: 416px) {
    font-size: 5vw;
  }
`;

export const SliderWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  overflow: hidden;
  padding: 20px;
`;

export const InnerCarousel = styled(motion.div)`
  display: inline-flex;
`;

export const SliderCard = styled.div`
  width: 300px;
  background: rgba(255, 255, 255, 0);
  border-radius: 16px;
  backdrop-filter: bl(20px);
  padding: 30px 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  pointer-events: none;
`;
export const CardHeader = styled.div`
  margin-bottom: 16px;
`;
export const CardTitle = styled.p`
  font-size: 1vw;
  font-weight: bold;
  color: #000;
  @media (max-width: 416px) {
    font-size: 6vw;
  }
`;
export const CardSubtitle = styled.p`
  .sub_title {
    font-size: 1vw;
    color: #eee;
  }
  @media (max-width: 416px) {
    font-size: 5vw;
  }
`;
export const CardImg = styled.div`
  width: 100%;
  height: 250px;
  display: block;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 32px;
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
