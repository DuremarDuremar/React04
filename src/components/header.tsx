import React, { useState } from "react";
import {
  Content,
  Logo,
  Video,
  Play,
  Ellipse,
  Group,
  Youtube,
} from "../style/header_style";
import { logo, arrow, ellipse, group } from "../assets/header_svg";

interface IProps {
  setFog: React.Dispatch<React.SetStateAction<boolean>>;
  fog: boolean;
}

const Header: React.FC<IProps> = ({ setFog, fog }) => {
  const [tube, setTube] = useState<boolean>(false);

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
    </Content>
  );
};

export default Header;
