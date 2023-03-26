import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>  
          {/*
          <Route path="/" element={<div>VAsyl dyakuiu</div>}/>
          <Route path="/about" element={<div>Vasyl programmer</div>}/>
           */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
