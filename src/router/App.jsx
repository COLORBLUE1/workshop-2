import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Welcome />} />
            <Route path="react" element={<ReactComponent />} />
            <Route path="vite" element={<ViteComponent />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
