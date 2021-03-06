import { RequestHandler } from "express";

export const LoggerHandler: RequestHandler = function (req, res, next) {
    const method = req.method.toUpperCase();
    if (req.method !== 'OPTIONS') {
        console.log('Request: ', method, '-', req.path);
    }
    next();
}