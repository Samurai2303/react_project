export default function Simpson(props) {

    let {simpson} = props;

    return(
        <div>
            <h2>{simpson.name} - {simpson.age} years</h2>
            <p>{simpson.info}</p>
        </div>
    )
}