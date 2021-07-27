import React, { FC } from "react";
import {
  Content,
  Logo,
  Video,
  Play,
  Ellipse,
  Group,
  Youtube,
  Title,
  Text,
  Properties,
} from "../style/header_style";
import {
  logo,
  arrow,
  ellipse,
  group,
  prop1,
  prop2,
  prop3,
  prop4,
} from "../assets/header_svg";

interface IProps {
  setFog: React.Dispatch<React.SetStateAction<boolean>>;
  fog: boolean;
}

const Header: FC<IProps> = ({ setFog, fog }) => {
  // const [tube, setTube] = useState<boolean>(false);

  return (
    <Content>
      <Logo>{logo}</Logo>
      <Video onClick={(e) => e.stopPropagation()}>
        <Play onClick={() => setFog(true)}>{arrow}</Play>
        <Ellipse>{ellipse}</Ellipse>
        <Group>{group}</Group>
        {fog && (
          <Youtube>
            <iframe
              width="329"
              height="201"
              src="https://www.youtube.com/embed/sPyAQQklc1s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Youtube>
        )}
      </Video>
      <Title>
        <h1>
          <strong>Фото на</strong>
          <br /> праздник
        </h1>
      </Title>
      <Text>
        <p>
          Lorem ipsum dolor sit amet, consectetur{" "}
          <strong>adipiscing elit</strong>, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna <br />
          aliqua.
        </p>
      </Text>
      <Properties>
        <div>
          {prop1}
          <p>
            Безлимитная <br />
            печать фото
          </p>
        </div>
        <div>
          {prop2}
          <p>
            Фотореквизит <br />в наличии
          </p>
        </div>
        <div>
          {prop3}
          <p>
            Фотоотчет в <br />
            электронном виде
          </p>
        </div>
        <div>
          {prop4}
          <p>
            Цены <br />
            ниже рынка
          </p>
        </div>
      </Properties>
    </Content>
  );
};

export default Header;
