
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import style from "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Productitem from "./pages/productItem/Productitem";

function App() {
  return (
    <Router>
      <div className="App">
      <Topbar/>
      <div className="page-container">
        <Sidebar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={<UserList/>}/>
            <Route path="/user/:userId" element={<User/>}/>
            <Route path="/newUser" element={<NewUser/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path ="/products/productitem" element={<Productitem/>}/>
          </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
