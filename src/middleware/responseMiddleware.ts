import { Request, Response, NextFunction } from "express";

const responseMiddleware = (
    res: Response,
) => {
    const status = res.locals.status || 200;

    if (status >= 400) {
        res.status(status).json({
            message: res.locals.message,
        });
    }
    res.status(status).json(res.locals.data);
};

const errorMiddleware = async (
    res: Response,
) => {
    const status = res.locals.status || 500;

    res.status(status).json({
        message: res.locals.message || "Internal Server Error",
    });
};

export { responseMiddleware, errorMiddleware };
