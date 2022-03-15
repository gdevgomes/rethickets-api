import { Request, Response, Router } from "express";

const router: Router = Router();

router.get('/', function (req: Request, res: Response) {
    res.send('User Router');
});

export default router