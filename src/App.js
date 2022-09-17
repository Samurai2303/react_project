import './App.css';
import {Users} from "./components/users/Users";
import {Launches} from "./components/spaceX/Launches";

function App() {

    return (
        <div>
            {<Users/>}
            <hr/>
            {<Launches/>}
        </div>
    );
}

export default App;