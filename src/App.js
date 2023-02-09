import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Error404 from "./components/Error404";
import User from "./components/User";
import About from "./components/About";
import Contact from "./components/Contact";
import {useState} from "react";
import UserDetails from "./components/UserDetails";

function App() {
    const [users, setUsers] = useState([
        {id:'001',name:"Tuấn Anh 1", email:"ttuananh1@gmail.com"},
        {id:'002',name:"Tuấn Anh 2", email:"ttuananh2@gmail.com"},
        {id:'003',name:"Tuấn Anh 3", email:"ttuananh3@gmail.com"},
        {id:'004',name:"Tuấn Anh 4", email:"ttuananh4@gmail.com"},
        {id:'005',name:"Tuấn Anh 5", email:"ttuananh5@gmail.com"},
        {id:'006',name:"Tuấn Anh 6", email:"ttuananh6@gmail.com"},
        {id:'007',name:"Tuấn Anh 7", email:"ttuananh7@gmail.com"},
        {id:'008',name:"Tuấn Anh 8", email:"ttuananh8@gmail.com"}
    ])
    return (
        <BrowserRouter>
            <div className="App">
                <div className="container">
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                        <Route path={"/about"} element={<About/>}/>
                        <Route path={"/user"} element={<User users={users}/>}/>
                        <Route path={"/user/:userid"} element={<UserDetails users={users}/>}/>
                        <Route path={"*"} element={<Error404/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
