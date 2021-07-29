import React, { FC, useState } from "react";
import { useInView } from "react-intersection-observer";

import { arrowLeft, arrowRight } from "../assets/cards_svg";
import {
  Content,
  Slider,
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
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  console.log(inView);
  console.log(entry?.target.id);
  return (
    <Content>
      <Slider>
        {/* <Arrow left>{arrowLeft}</Arrow> */}
        {images.map((item, index) => {
          return (
            <Image key={index} ref={ref} id={String(index)}>
              <img src={item} alt="30" />
            </Image>
          );
        })}
        {/* <Arrow>{arrowRight}</Arrow> */}
      </Slider>
      <Title></Title>
      <Info></Info>
      <Time></Time>
      <Cost></Cost>
    </Content>
  );
};

export default Card;
