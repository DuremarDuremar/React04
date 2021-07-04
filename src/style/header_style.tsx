import styled from "styled-components";

export const Content = styled.section`
  min-height: 500px;
`;

export const Logo = styled.div`
  padding: 10px 0 0 12px;
`;

export const Video = styled.div`
  width: 328.01px;
  height: 200.54px;
  border: 3px solid #ee3d48;
  margin: 0px auto;
  margin-top: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  background: #fff;
`;

export const Youtube = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  /* z-index: 2; */
`;

export const Play = styled.button`
  width: 70px;
  height: 70px;
  background: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  transition: all 0.5s linear;
  :hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const Ellipse = styled.div`
  background: rgba(238, 61, 72, 0.14);
  border-radius: 50%;
  position: absolute;
  bottom: -50px;
  left: -10px;
  box-shadow: 0px 4px 30px rgba(238, 61, 72, 0.5);
`;

export const Group = styled.div`
  background: transparent;
  position: absolute;
  top: -13px;
  right: -13px;
`;
