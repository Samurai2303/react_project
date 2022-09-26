import {useEffect, useState} from "react";
import {getAlbums} from "../../../services/jsonplaceholder.service";
import {Album} from "../album/Album";

export function Albums() {
    let [albums, setAlbums] = useState([]);
    useEffect(() => {
        getAlbums().then(({data}) => setAlbums(data));
    }, [])

    return(
        <div>
            {albums.map(value => <Album album={value} key={value.id}/>)}
        </div>
    )
}