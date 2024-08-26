import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../assets/Componentes/Login";
import CreateAcount from "../assets/Componentes/CreateAcount";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create-account" element={<CreateAcount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
