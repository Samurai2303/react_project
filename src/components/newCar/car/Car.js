import {actions} from "../../../services/cars.api.service";
import css from './car.module.css';

export function Car({car, setCars, setUpdateCar}) {

    let deleteCar = async ()=> {
        await actions.deleteById(car.id);
        setCars(cars=>{
            let v = cars.findIndex(value => value.id === car.id);
            cars.splice(v, 1);
            return [...cars];
        });
    }

    return(
        <div>
            <h3>Id - {car.id} <br/> Model - {car.model}</h3>
            <p>Price - {car.price} <br/>
                Year - {car.year}</p>
            <div>
                <button onClick={()=>{setUpdateCar(car)}}>Update</button>
                <button onClick={()=>{deleteCar()}}>Delete</button>
            </div>

        </div>
    )
}