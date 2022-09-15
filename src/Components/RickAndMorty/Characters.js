import {useState} from "react";
import Character from "./Character";

export default function Characters() {

    let [characters, setCharacters] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            let value1 = value.results.splice(0, 6);
            setCharacters(value1);
        });

    return (
        <div>
            {characters.map(value => (<Character character={value} key={value.id}/>))}
        </div>
    );
}