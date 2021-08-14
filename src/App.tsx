import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { axiosFrame } from "./store/slices";
import { Global, Content, Fog } from "./style/app_style";
import Header from "./components/header";
import Cards from "./components/cards";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [fog, setFog] = useState<boolean>(false);

  useEffect(() => {
    dispatch(axiosFrame());
  }, [dispatch]);

  return (
    <>
      <Global />
      <Content>
        <Header setFog={setFog} fog={fog} />
        <Cards />
        {fog && <Fog onClick={() => setFog(false)} />}
      </Content>
    </>
  );
};

export default App;
