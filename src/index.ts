import 'dotenv/config'
import express, { Request, Response, Router } from "express";
import routes from "./routes/index";
import { knex } from 'knex'
import config from "./config/knexConfig";
import bodyParser from "body-parser";

export const knexInstance = knex(config);

const app = express()
const router: Router = Router();

app.use(bodyParser.json({ limit: "50mb" }));

app.use(
    router.get("/", (req: Request, res: Response) => {
        res.status(200).json({
            message: "rethinket is running...",
            version: "1.0.0",
        });
    })
);

app.use("/", routes);

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
});