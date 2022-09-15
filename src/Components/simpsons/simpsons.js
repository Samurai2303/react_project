import {simpsonsList} from "./simpsonslist";
import Simpson from "./Simpson";

export default function Simpsons(){

    return (
        <div>
            {simpsonsList.map((value, index) => (<Simpson simpson={value} key={index}/>))}
        </div>
    )
}
