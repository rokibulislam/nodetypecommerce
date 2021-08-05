import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { IUser } from './../interfaces/user'
import { IRole } from './../interfaces/role'

export class AuthMiddleware {

    static isLoggedIn(req: Request, res: Response, next: NextFunction) {
        next();
    }

    static isAdmin(req: Request, res: Response, next: NextFunction) {
        next();
    }

    static isUser(req: Request, res: Response, next: NextFunction) {
        next();
    }
}

export class Authorize {

}