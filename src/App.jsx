import React from "react";
import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
}

export default App;
