import React, { FC, useState } from "react";
import { Content, Header } from "../style/cards_style";

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
    </Content>
  );
};

export default Cards;
