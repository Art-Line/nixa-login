import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import ErrorPage from './pages/ErrorPage';

function App() {

  const [usersList, setUsersList] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [islogin, setIsLogin] = useState(false);

  const LoadData = async () => {
    try {
      await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setUsersList(response.data))
    } catch (error) {
      console.error('no data')
    }
  }
  
  useEffect(() => {
    const getUserData = JSON.parse(localStorage.getItem("user"));
    if (getUserData) {
      setIsLogin(true);
      setUserInfo(getUserData)
    } else {
      LoadData();
    }
  }, [])

  return (
    <>
      {islogin ?
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<UserPage setUserInfo={setUserInfo} setIsLogin={setIsLogin} userInfo={userInfo} />} />
              <Route path='*' element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        : <Login usersList={usersList} setUserInfo={setUserInfo} setIsLogin={setIsLogin} />
      }
    </>
  );
}

export default App;
