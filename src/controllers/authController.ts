import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcrypt';
import knexConfig from "../config/knexConfig";
import status from 'http-status';
import jwt from 'jsonwebtoken';
const knex = require("knex")(knexConfig);

export const findAllUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {
            username,
            password,
            firstName: first_name,
            lastName: last_name,
            email,
        } = req.body
        const user = await knex.select('password', 'username', 'id').from('users').where({ username }).first()

        const verify = await bcrypt.compare(password, user.password);

        if (!verify) throw new Error("Wrong Password");

        const data = {
            first_name, last_name, email,
            token: jwt.sign(
                {
                    user_id: user.id,
                    exp: Date.now() / 1000 + 86400,
                },
                process.env.TOKEN_SECRET
            ),
        }
        res.locals.data = data
        res.locals.status = status.OK
    } catch (error) {
        console.log(error);
        res.locals.status = status.INTERNAL_SERVER_ERROR;
        res.locals.message = status[status.INTERNAL_SERVER_ERROR];
        next();
    }
};