import React from "react";
import Props_01 from "./components/01_Props";
import Conditional_Rendering_02 from "./components/02_Conditional_Rendering";
import Conditional_Rendering_03 from "./components/03_Conditional_Rendering";
import Validation_06 from "./components/06_Validation";

const App = () => {
  return (
    <>
      <Props_01 name={"prince"} />
      <Conditional_Rendering_02 />
      <Conditional_Rendering_03/>
      <Validation_06/>
    </>
  );
};

export default App;
