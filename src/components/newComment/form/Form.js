import {useForm} from "react-hook-form";
import {postComment} from "../../../services/users.api.service";

export function Form({setComments}) {

    let {register, handleSubmit,formState:{errors,isValid}} = useForm({mode:"all"});


    let submit = async (data) => {
        let response = await postComment(data)
        setComments(comments=>[...comments,response])
    }

    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name', {required: true, minLength:{value:3,message:'Minimal length of comment name is 3 characters'}})}/>
                <input type="text" placeholder={'body'} {...register('body', {required: true, minLength:{value:3,message:'Minimal length of comment body is 3 characters'}})}/>
                <input type="email" placeholder={'email'} {...register('email', {required: true})}/>
                <input type="number" placeholder={'postId'} {...register('postId', {required: true, valueAsNumber:true, min:1})}/>
                <button disabled={!isValid}>Create new comment</button>
            </form>
            {errors.name&&<p>{errors.name.message}</p>}
            {errors.body&&<p>{errors.body.message}</p>}
        </div>
    )
}