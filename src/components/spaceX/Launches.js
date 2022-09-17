import {useEffect, useState} from "react";
import {getLaunches} from "../../services/spaceX.servises";
import {Launch} from "./Launch";
import {getLaunchesAxios} from "../../services/spaceX.servicesAxios";


export function Launches() {
    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        // getLaunches().then(value => {
        //     setLaunches(value);
        // })

        getLaunchesAxios().then(value => {
            setLaunches(value.data);
        })
    }, []);




    return (
        <div>
            {launches.length?launches.filter(value => value.launch_year !== '2020').map(value => <Launch launch={value} key={value.flight_number}/>):<div>Waiting response from 'api.spacexdata.com'</div>}
        </div>
    );



}