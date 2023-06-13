import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./layouts/menu/Menu";
import Home from "./components/Home/Home";
import Edit from "./components/Edit/Edit";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />}>
              <Route path="/" element={<Home />} />
              <Route path="pages/geeks" element={<Home />} />
              <Route path="pages/geek/:id" element={<Edit />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
