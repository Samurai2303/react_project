import {useEffect, useState} from "react";

import {Form} from "../form/Form";
import {Car} from "../car/Car";
import {actions} from "../../../services/cars.api.service";
import css from './cars.module.css';

export function Cars() {

    let [cars, setCars] = useState([]);
    let [updateCar, setUpdateCar] = useState(null);

    useEffect(() => {
        actions.getAll().then(({data}) => setCars(data));
    }, []);






    return (
        <div>
            <Form setCars={setCars} updateCar={updateCar} setUpdateCar={setUpdateCar}/>
            <hr/>
            {cars.length === 0 ? <div>Loading...</div> : cars.map((value, index) => <Car car={value} key={index} setCars={setCars} setUpdateCar={setUpdateCar}/>)}
        </div>
    );
}