import styled from "styled-components";
import Slider from "react-slick";

export const Content = styled.div`
  position: relative;
`;

export const Image = styled.div`
  img {
    width: 296px;
    height: 222px;
  }
`;

export const Wrapper = styled(Slider)`
  width: 100%;
  overflow: hidden;

  .slick-slide {
    width: 296px;
    height: 222px;
  }

  .slick-track {
    display: flex;
  }
`;

export const Arrow = styled.div<{ left?: boolean }>`
  background: rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  width: 40px;
  height: 40px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${(props) => (props.left ? "6px" : "249px")};
  top: 50%;
  cursor: pointer;
  z-index: 1;
`;

export const Title = styled.div``;

export const Info = styled.div``;

export const Time = styled.div``;

export const Cost = styled.div``;
