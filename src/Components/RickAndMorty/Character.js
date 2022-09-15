export default function Character(props) {

    let {character} = props;

    return (
        <div>
            <h2>{character.id} - {character.name}</h2>
            <p>Status - {character.status} <br/> Species - {character.species} <br/>
                Gender - {character.gender}</p>
            <img src={character.image} alt={character.name}/>
        </div>
    );
};