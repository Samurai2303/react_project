import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import {carFromValidator} from "../../../validators/carValidator";
import {actions} from "../../../services/cars.api.service";
import css from './form.module.css'


export function Form({setCars, setUpdateCar, updateCar}) {

    let {register, handleSubmit, formState: {errors, isValid}, reset, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carFromValidator)
    });

    async function submit(data){
        if (updateCar) {
            let updatedCar = await actions.updateById(updateCar.id, data);
            setCars(cars => {
                let index = cars.findIndex(value => value.id === updateCar.id);
                cars.splice(index, 1, updatedCar.data);
                return cars;
            });
            setUpdateCar(null);
        }else{
            let newCar = await actions.post(data);
            setCars(cars => [...cars, newCar.data]);
        }
        reset();
    }

    useEffect(() => {
        if (updateCar) {
            setValue('model', updateCar.model, {shouldValidate: true});
            setValue('price', updateCar.price, {shouldValidate: true});
            setValue('year', updateCar.year, {shouldValidate: true});
        }
    }, [updateCar, setValue])

    return (
        <div className={css.wrap}>
            <form className={css.form} onSubmit={handleSubmit(submit)}>
                <input className={css.input} type="text" placeholder={'Model'} {...register('model')}/>
                <input className={css.input} type="number" placeholder={'Price'} {...register('price', {valueAsNumber: true})}/>
                <input className={css.input} type="number" placeholder={'Year'} {...register('year', {valueAsNumber: true})}/>
                <button className={isValid?css.buttonY:css.buttonN} disabled={!isValid}>{updateCar? 'Update car' : 'Create new car'}</button>
            </form>
            <div className={css.errors}>
                {errors.model && <p>{errors.model.message}</p>}
                {errors.price && <p>{errors.price.message}</p>}
                {errors.year && <p>{errors.year.message}</p>}
            </div>

        </div>
    )
}