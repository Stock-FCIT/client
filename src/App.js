import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./Pages/Main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="body">
          <Routes>{<Route path="/" element={<Main />} />}</Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
