import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navs from "./components/Navs";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import { useState } from "react";
import PrivateRoute from "./pages/PrivateRoute.jsx";
import UserDetail from "./pages/UserDetail.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <BrowserRouter>
      <Header>
        <Navs isLogged={isLogged} setIsLogged={setIsLogged} />
      </Header>
      <Routes>
        <Route path="/" element={<PrivateRoute isLogged={isLogged} />}>
          <Route path="" element={<Home />} />
        </Route>
          <Route path="/about" element={<About />} />
          <Route path="/followers/:username" element={<UserDetail />} />
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
