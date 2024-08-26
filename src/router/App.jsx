import { useState } from "react";
import { Homeone } from "../assets/Componentes/Pantallaone/Home.one";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../assets/Componentes/Pantallaone/Main";
import { Navbar } from "../assets/Block/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        {/* <Route index element={<Welcome />} />
          <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
