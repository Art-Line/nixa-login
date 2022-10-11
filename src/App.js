import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
// import Login from "./pages/Login";
import UserPage from "./pages/UserPage";

function App() {


  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => console.log(response.data))


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<UserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>


      {/* <Login /> */}

    </>
  );
}

export default App;
