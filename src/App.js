import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './Pages/Main/Main';
import Details from './Pages/Details/Details';
import UserPage from './Pages/UserPage/UserPage';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { check } from './http/userAPI';
import { Context } from './index';
import NotFound from './Pages/NotFound/NotFound';
import Cart from './Pages/Cart/Cart';

const App = observer(() => {
  const { user } = useContext(Context);

  const checkIsAuth = async () => {
    try {
      await check();
      user.setIsAuth(true);
    } catch (e) {
      console.log(e.response.data.message);
    }
  };

  useEffect(() => {
    checkIsAuth();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="body">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/plant/:id" element={<Details />} />
            <Route path="/userPage" element={user.isAuth ? <UserPage /> : <NotFound />} />
            <Route path="/cart" element={user.isAuth ? <Cart /> : <NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
});

export default App;
