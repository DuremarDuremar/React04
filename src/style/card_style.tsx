import styled from "styled-components";

export const Content = styled.div`
  position: relative;
`;

export const Slider = styled.div`
  display: flex;
  overflow-x: scroll;
`;
export const Image = styled.div`
  img {
    width: 296px;
    height: 222px;
  }
`;

export const Arrow = styled.div<{ left?: boolean }>`
  background: rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${(props) => (props.left ? "6px" : "250px")};
  top: 50%;
  cursor: pointer;
`;

export const Title = styled.div``;

export const Info = styled.div``;

export const Time = styled.div``;

export const Cost = styled.div``;
