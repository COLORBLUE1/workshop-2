import { useState } from "react";
import ProfilePage from "../assets/ProfilePage/ProfilePage";

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
            </Route> path ="user" element ={<ProfilePage/>}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */
      <ProfilePage/>}
    </>
  );
}

export default App;
