import { NextFunction, Request, Response } from "express";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    console.log(err.message);

    res.status(statusCode).json({
        message: err.message,
        statusCode: statusCode,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    })
}

export default errorHandler;