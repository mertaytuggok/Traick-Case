import { Main } from "./Pages/Main";
import CloudProvider from "./Context/Context";
import React from "react";

function App() {
  return (
    <CloudProvider>
      <Main />
    </CloudProvider>
  );
}

export default App;
