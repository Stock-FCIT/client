import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './Pages/Main/Main';
import Details from './Pages/Details/Details';
import UserPage from './Pages/UserPage/UserPage';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { check, getUserInfo } from './http/userAPI';
import { Context } from './index';

const App = observer(() => {
  const { user } = useContext(Context);

  useEffect(() => {
    check().then((data) => {
      user.setIsAuth(true);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="body">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/plant/:id" element={<Details />} />
            <Route path="/userPage" element={<UserPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
});

export default App;
