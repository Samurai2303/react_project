import './App.css';
import {Posts} from "./components/posts/Posts";
import {Users} from "./components/Users";

function App() {

    let lift = (user) => {
        Posts(user);
    }

    return (
        <div>
            <hr/>

            <Users lift={lift}/>


        </div>
    );
}

export default App;
