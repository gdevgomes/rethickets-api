import { Request, Response, NextFunction } from "express";
import * as yup from 'yup';

type UserType = {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

type UserEditType = {
    id: string | number;
    username?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
}

export const newUserValidateBody = async (req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const newUserScheme = yup.object().shape({
            password: yup.string().required("password is Required"),
            username: yup.string().required("username is Required"),
            first_name: yup.string().required("first_name is Required"),
            last_name: yup.string().required("last_name is Required"),
            email: yup.string().email().required("email is Required"),
        });
        await newUserScheme.validate(req.body)
        next()
    } catch (error) {
        res.locals.status = 400;
        next(error.message)
        console.log(error.message)
    }
}

export const editUserValidateBody = (data: UserEditType) => {
    try {
        const editUserScheme = yup.object().shape({
            id: yup.number().required().positive().integer(),
            username: yup.string(),
            password: yup.string(),
            first_name: yup.string(),
            last_name: yup.string(),
            email: yup.string().email(),
        });

        return editUserScheme.validate(data)
    } catch (error) {
        console.log(error.message)
    }
}

export const joinEventValidate = (data: UserType) => {
    try {
        const joinEventScheme = yup.object().shape({
            user_id: yup.string().required(),
            event_id: yup.string().required(),
        });
        return joinEventScheme.validate(data)
    } catch (error) {
        console.log(error.message)
    }
}
