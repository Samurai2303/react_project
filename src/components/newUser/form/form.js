import {useForm} from "react-hook-form";

import css from './form.module.css';
import {postUser} from "../../../services/users.api.service";

export function Form({setUsers}) {
    let {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({mode:'all'});


    async function submit(data) {
        await console.log(data);
        let newUser = await postUser(data);
        setUsers(users => [...users, newUser]);
        reset();
    }

    return (
        <div className={css.formDiv}>
            <form className={css.form} onSubmit={handleSubmit(submit)}>
                <h3>User info:</h3>
                <input className={css.input} type='text' placeholder={'Name'} {...register('name', {required:true, minLength:{value:2, message:'Minimal length of name is 2 characters'},  maxLength:{value:20, message:'Maximal length is 20 characters'}})}/>
                <input className={css.input} type='text' placeholder={'Username'} {...register('username', {required:true, minLength:{value:2, message:'Minimal length of username is 2 characters'},  maxLength:{value:20, message:'Maximal length is 20 characters'}})}/>
                <input className={css.input} type='number' placeholder={'Phone'} {...register('phone', {valueAsNumber:true, required:true, min:{value:380000000000, message:'phone number must starts from 380...'}})}/>
                <input className={css.input} type='email' placeholder={'Email'} {...register('email', {required:true})}/>
                <h3>Address:</h3>
                <input className={css.input} type='text' placeholder={'City'} {...register('address.city', {required:true, minLength:{value:2, message:'Minimal length of city name is 2 characters'}})}/>
                <input className={css.input} type='text' placeholder={'Street'} {...register('address.street', {required:true, minLength:{value:2, message:'Minimal length of street name is 2 characters'}})}/>
                <input className={css.input} type='text' placeholder={'Suite'} {...register('address.suite', {required:true, minLength:{value:2, message:'Minimal length of suite is 2 characters'}})}/>
                <input className={css.input} type='text' placeholder={'Zipcode'} {...register('address.zipcode', {required:true, minLength:{value:2, message:'Minimal length of zipcode is 2 characters'}})}/>
                <input className={css.input} type='number' placeholder={'Lat'} {...register('address.geo.lat', {required:true})}/>
                <input className={css.input} type='number' placeholder={'Lng'} {...register('address.geo.lng', {required:true})}/>
                <h3>Company:</h3>
                <input className={css.input} type='text' placeholder={'Company name'} {...register('company.companyName', {required:true, minLength:{value:2, message:'Minimal length of company name is 2 characters'}})}/>
                <input className={css.input} type='text' placeholder={'Website'} {...register('company.website', {required:true, minLength:{value:2, message:'Minimal length of website name is 2 characters'}})}/>
                <input className={css.input} type='text' placeholder={'CatchPhrase'} {...register('company.catchPhrase', {required:true, minLength:{value:2, message:'Minimal length of catchPhrase is 2 characters'}})}/>
                <input className={css.input} type='text' placeholder={'Bs'} {...register('company.bs', {required:true, minLength:{value:2, message:'Minimal length of bs is 2 characters'}})}/>

                <button disabled={!isValid}>Create new user</button>
            </form>
            <div className={css.errors}>
                <h3>Errors:</h3>
                {errors.name&&<p>{errors.name.message}</p>}
                {errors.username&&<p>{errors.username.message}</p>}
                {errors.phone&&<p>{errors.phone.message}</p>}
                {errors.email&&<p>{errors.email.message}</p>}
                {errors.city&&<p>{errors.city.message}</p>}
                {errors.street&&<p>{errors.street.message}</p>}
                {errors.suite&&<p>{errors.suite.message}</p>}
                {errors.zipcode&&<p>{errors.zipcode.message}</p>}
                {errors.lat&&<p>{errors.lat.message}</p>}
                {errors.lng&&<p>{errors.lng.message}</p>}
                {errors.companyName&&<p>{errors.companyName.message}</p>}
                {errors.website&&<p>{errors.website.message}</p>}
                {errors.catchPhrase&&<p>{errors.catchPhrase.message}</p>}
                {errors.bs&&<p>{errors.bs.message}</p>}
            </div>
        </div>
    )
}