import './App.css';
import {Link, Route, Routes, Outlet, BrowserRouter} from "react-router-dom";
import {HomePage} from "./components/homePage/HomePage";
import {Todos} from "./components/todos";
import {Albums} from "./components/albums";
import {Comments} from "./components/comments";
import {Post} from "./components/post/Post";

function App() {

    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home page</Link></li>
                <li><Link to={'/todos'}>Todos</Link></li>
                <li><Link to={'/albums'}>Albums</Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>
            </ul>
            <hr/>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path={'/todos'} element={<Todos/>}/>
                <Route path={'/albums'} element={<Albums/>}/>
                <Route path={'/comments'} element={<Comments/>}/>
                <Route path={'/posts/:id'} element={<Post/>}/>

            </Routes>

        </div>
    );
}

export default App;