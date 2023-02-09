import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Error404 from "./components/Error404";
import User from "./components/User";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="container">
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                        <Route path={"/about"} element={<About/>}/>
                        <Route path={"/user"} element={<User/>}/>
                        <Route path={"/user/:userid"} element={<User/>}/>
                        <Route path={"*"} element={<Error404/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
