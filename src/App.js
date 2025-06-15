import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import News from "./Compoents/News";
import Navbar from "./Compoents/Navbar";
import Bottom from "./Compoents/Bottom";

function App() {
  return (
    <>
      <Navbar />
      <News />

      <Bottom />
    </>
  );
}

export default App;
