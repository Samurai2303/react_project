import './App.css';
import Simpsons from "./Components/simpsons/simpsons";
import Characters from "./Components/RickAndMorty/Characters";


function App() {

  return (
      <div>
          <h2>Simpsons</h2>
          {<Simpsons/>}

          <h2>Rick and Morty characters</h2>
          {<Characters/>}


      </div>
  );
}

export default App;