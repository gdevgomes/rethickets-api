import bcrypt from 'bcrypt';
import knexConfig from "../config/knexConfig";

const jwt = require("jsonwebtoken")
const knex = require("knex")(knexConfig);

const authentication = async ({ username, password }) => {
    try {
        const user = await knex.select('password', 'username', 'id').from('users').where({ username }).first()

        const verify = await bcrypt.compare(password, user.password);

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
    } catch (error) {
        console.log(error)
    }

    return
}