import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Content, Header } from "../style/cards_style";
import { useTypeSelector } from "../hooks/useTypeSelector";
import Card from "./card";

const Cards: FC = () => {
  const state = useSelector((state: any) => state.frame);

  console.log(state.items);

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
