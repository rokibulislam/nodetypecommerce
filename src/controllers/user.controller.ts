import * as express from 'express'
import { inject } from 'inversify'
import { 
    BaseHttpController, controller, 
    httpDelete, httpGet,httpPost, httpPut,
    response, request, interfaces, queryParam, requestParam
} from 'inversify-express-utils'
import { JsonResult } from 'inversify-express-utils/dts/results'

@controller('/users')
export class UserController extends BaseHttpController {

    constructor() {
        super()
    }
    
    @httpGet('/')
    public async getUsers(req: express.Request) : Promise<JsonResult> {
        const statusCode = 200;
        return this.json({
            'name': 'test3'
        },statusCode);
    }

    @httpGet('/:id')
    public async getUser(req: express.Request) : Promise<JsonResult>  {
        const statusCode = 200;
        return this.json({
            'id': req.params.id
        }, statusCode)
    }

    @httpPost("/")
    public async createUser(@request() req: express.Request,@response() res: express.Response) {
        const statusCode = 200;
        return this.json({},statusCode)
    }

    @httpPut("/:id")
    public async updateUser(@request() req: express.Request,@response() res: express.Response) : Promise<JsonResult> {
        const statusCode = 200;
        return this.json({},statusCode)
    }

    @httpDelete("/:id")
    public async deleteUser(@requestParam("id") id: string, @response() res: express.Response): Promise<JsonResult>  {
        const statusCode = 200;
        return this.json({}, statusCode);
    }
}