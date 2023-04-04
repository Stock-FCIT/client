import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./Pages/Main/Main";
import UserPage from "./Pages/UserPage/UserPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="body">
          <Routes>{<Route path="/" element={<Main />} />}</Routes>
          <Routes>{<Route path="/userPage" element={<UserPage />} />}</Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
