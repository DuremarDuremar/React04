import styled from "styled-components";

export const Content = styled.section`
  width: 328.01px;
  margin: 0px auto;
`;

export const Logo = styled.div`
  padding: 10px 0 0 12px;
`;

export const Video = styled.div`
  height: 200.54px;
  border: 3px solid #ee3d48;
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

export const Title = styled.div`
  margin-top: 20px;
  h1 {
    padding-top: 30px;
    font-family: "Roboto Slab", serif;
    font-weight: bold;
    font-size: 40px;
    line-height: 53px;
    strong {
      color: #ee3d48;
    }
  }
`;

export const Text = styled.div`
  width: 328.01px;
  margin: 20px auto 0;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  line-height: 130%;
  color: #131313;
  strong {
    color: #ee3d48;
    font-weight: normal;
    text-decoration: underline;
  }
`;

export const Properties = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-top: 25px;
  div {
    text-align: center;
  }
  p {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
  }
`;
