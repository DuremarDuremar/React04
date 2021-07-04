import React, { useState } from "react";
import { Global, Content, Fog } from "./style/app_style";
import Header from "./components/header";

const App: React.FC = () => {
  const [fog, setFog] = useState<boolean>(false);

  return (
    <>
      <Global />
      <Content>
        <Header setFog={setFog} fog={fog} />
        {fog && <Fog onClick={() => setFog(false)} />}
      </Content>
    </>
  );
};

export default App;
