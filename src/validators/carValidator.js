import Joi from "joi";


let carFromValidator = Joi.object({
    model: Joi.string().regex(/^[A-Za-zА-Яа-я]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters; Length from 1 to 20 characters'
    }),
    price: Joi.number().required().min(100).max(10000000),
    year: Joi.number().min(1980).max(new Date().getFullYear())
});

export {carFromValidator};