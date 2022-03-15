import express, { Request, Response } from "express";
import eventsRoutes from "./routes/events";
import userRoutes from "./routes/user";

const app = express()
const port = process.env.PORT

app.use('/user', userRoutes)
app.use('/event', eventsRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req: Request, res: Response) => {
    res.send('Primeira Rota');
});