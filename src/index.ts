import express, { Request, Response } from "express";
import eventsRoutes from "./routes/events";
import userRoutes from "./routes/user";
import { knex } from 'knex'
import { config } from "./config/knexConfig";

const app = express()
const port = process.env.PORT
export const knexInstance = knex(config);

app.use('/user', userRoutes)
app.use('/event', eventsRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req: Request, res: Response) => {
    res.send('Primeira Rota');
});