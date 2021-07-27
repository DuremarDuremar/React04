import React, { FC, useState } from "react";
import {
  Content,
  Slider,
  Image,
  Title,
  Info,
  Time,
  Cost,
} from "../style/card_style";

const Card: FC = () => {
  const [img, setImg] = useState([
    "https://media.lpgenerator.ru/uploads/2019/07/11/1_thumb600x460.jpg",
    "https://akket.com/wp-content/uploads/2018/06/Google-Chrome-Android-52.png",
  ]);

  return (
    <Content>
      <Slider>
        <Image>
          <img src={img[0]} alt="0" />
        </Image>
        <Image>
          <img src={img[1]} alt="1" />
        </Image>
      </Slider>
      <Title></Title>
      <Info></Info>
      <Time></Time>
      <Cost></Cost>
    </Content>
  );
};

export default Card;
