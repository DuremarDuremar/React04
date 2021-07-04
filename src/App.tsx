import React from "react";
import { Global, Content } from "./style/app_style";
import Header from "./components/header";

const App: React.FC = () => {
  return (
    <>
      <Global />
      <Content>
        <Header />
      </Content>
    </>
  );
};

export default App;
