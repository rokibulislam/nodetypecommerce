import * as express from 'express'
import { inject } from 'inversify'
import { 
    BaseHttpController, controller, 
    httpDelete, httpGet, httpPost, httpPut,
    response, request, interfaces, queryParam, requestParam
} from 'inversify-express-utils'
import { JsonResult } from 'inversify-express-utils/dts/results'

@controller('/roles')
export class RoleController extends BaseHttpController {
    constructor() {
        super()
    }

    @httpGet('/')
    public async getRoles(req: express.Request) : Promise<JsonResult> {
        const statusCode =200;
        return this.json({
            'name': 'test 4'
        }, statusCode)
    }

    @httpGet('/:id')
    public async getRole(req: express.Request) : Promise<JsonResult> {
        const statusCode =200;
        return this.json({}, statusCode)
    }

    @httpPost('/')
    public async createRole(req: express.Request): Promise<JsonResult> {
        const statusCode =200;
        return this.json({},statusCode)
    }

    @httpPut('/:id')
    public async updateRole(req: express.Request): Promise<JsonResult> {
        const statusCode =200;
        return this.json({},statusCode)
    }

    @httpDelete('/:id')
    public async deleteRole(req: express.Request): Promise<JsonResult> {
        const statusCode =200;
        return this.json({},statusCode)
    }

    @httpPost('/:roleId/assign-modules')
    public async assignRole(req: express.Request): Promise<JsonResult> {
        const statusCode =200;
        return this.json({},statusCode)
    }
}