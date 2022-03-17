import bcrypt from 'bcrypt';
import knexConfig from "../config/knexConfig";

const jwt = require("jsonwebtoken")
const knex = require("knex")(knexConfig);

const authentication = async ({ username, password }) => {
    try {
        const user = await knex.select('*').from('users').where({ username }).first()
        const compare = await bcrypt.compare(password, user.password);

        if (!compare) throw new Error("Wrong Password");

        const data = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            token: jwt.sign(
                {
                    id: user.id,
                    exp: Date.now() / 1000 + 86400,
                },
                process.env.TOKEN_SECRET
            )
        }
        return data
    } catch (error) {
        console.log(error)
    }
}

export default { authentication }