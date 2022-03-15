import { Request, Response, Router } from "express";

const router: Router = Router();

router.get('/', function (req: Request, res: Response) {
    res.send('Events Router');
});

export default router