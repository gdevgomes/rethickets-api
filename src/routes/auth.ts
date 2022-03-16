import { Request, Response, Router } from "express";
import bcrypt from 'bcrypt';
import knexConfig from "../config/knexConfig";
import jwt from "jsonwebtoken";
const knex = require("knex")(knexConfig);

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const { password, id, first_name, last_name, email } = await knex.select('*').from('users')

        const verify = await bcrypt.compare(req.body.password, password);

        if (!verify) throw new Error("Wrong Password");

        const data = {
            first_name, last_name, email,
            token: jwt.sign(
                {
                    user_id: id,
                    exp: Date.now() / 1000 + 86400,
                },
                process.env.TOKEN_SECRET
            ),
        }
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
    }
});

export default router