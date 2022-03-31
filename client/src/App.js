import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/account/Login";
import Signup from "./pages/account/Signup";
import ForgotPassword from "./pages/account/ForgotPassword";
import Home from "./pages/home/Home";
import DetailView from "./pages/detail/DetailView";
import FirstPage from "./FirstPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/details/:name" element={<DetailView />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
