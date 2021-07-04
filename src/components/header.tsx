import React from "react";
import {
  Content,
  Logo,
  Video,
  Play,
  Ellipse,
  Group,
} from "../style/header_style";
import { logo, arrow, ellipse, group } from "../assets/header_svg";

const Header = () => {
  return (
    <Content>
      <Logo>{logo}</Logo>
      <Video>
        <Play>{arrow}</Play>
        <Ellipse>{ellipse}</Ellipse>
        <Group>{group}</Group>
      </Video>
    </Content>
  );
};

export default Header;
