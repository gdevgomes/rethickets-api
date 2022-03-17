import { Request, Response, Router } from "express";
import httpStatus from "http-status";
import { errorMiddleware, responseMiddleware } from "../middleware/responseMiddleware";
import { } from "../middleware/yupMiddleware";

const router: Router = Router();

router.get('/status', (req: Request, res: Response) => {
    res.status(httpStatus.OK).send('EVENTS WORKING');
});

// GET = All events
router.get("/",
    responseMiddleware,
    errorMiddleware
);

export default router
