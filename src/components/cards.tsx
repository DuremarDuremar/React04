import React, { FC } from "react";

import { Content, Header } from "../style/cards_style";
import Card from "./card";

const Cards: FC = () => {
  return (
    <Content>
      <Header>
        <h2>Фотобудки</h2>
        <span>Сортировка:</span>
        &nbsp;
        <select>
          <option>По популярности</option>
          <option>По цене</option>
        </select>
      </Header>
      <Card />
    </Content>
  );
};

export default Cards;
