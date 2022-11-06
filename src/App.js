import { Main } from "./Pages/Main";
import { CloudinaryContext } from "cloudinary-react";
import React from "react";

function App() {
  return (
    <div>
      <CloudinaryContext cloudName="dsfbibgxq">
        <Main />
      </CloudinaryContext>
    </div>
  );
}

export default App;
