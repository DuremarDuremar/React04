import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { axiosFrame } from "../store/actions/frameA";
import { arrowLeft, arrowRight } from "../assets/cards_svg";
import {
  Content,
  Wrapper,
  Image,
  Arrow,
  Title,
  Info,
  Time,
  Cost,
} from "../style/card_style";

const images = [
  "https://media.lpgenerator.ru/uploads/2019/07/11/1_thumb600x460.jpg",
  "https://akket.com/wp-content/uploads/2018/06/Google-Chrome-Android-52.png",
  "https://mediasat.info/wp-content/uploads/2015/05/google-logo.jpg",
];

const Card: FC = () => {
  const dispatch = useDispatch();

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow>{arrowRight}</Arrow>,
    prevArrow: <Arrow left>{arrowLeft}</Arrow>,
    variableWidth: true,
  };

  useEffect(() => {
    dispatch(axiosFrame());
  }, []);

  return (
    <>
      <Content>
        <Wrapper {...settings}>
          {images.map((item, index) => {
            return (
              <Image key={index} id={String(index)}>
                <img src={item} alt="330" />
              </Image>
            );
          })}
        </Wrapper>

        <Title></Title>
        <Info></Info>
        <Time></Time>
        <Cost></Cost>
      </Content>
    </>
  );
};

export default Card;
