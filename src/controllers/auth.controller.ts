import * as express from 'express'
import { inject } from 'inversify'
import { 
    BaseHttpController, controller, 
    httpDelete, httpGet,httpPost, httpPut, httpPatch,
    response, request, interfaces, queryParam, requestParam
} from 'inversify-express-utils'
import { JsonResult } from 'inversify-express-utils/dts/results'

@controller('/auth')
export class AuthController extends BaseHttpController {

    constructor() {
        super()
    }
    
    @httpPost('/signup')
    public async signup(req: express.Request) : Promise<JsonResult> {
        const statusCode = 200;
        return this.json({'name': 'test'},statusCode);
    }

    @httpPost('/login')
    public async login(req: express.Request): Promise<JsonResult> {
        const statusCode = 200;
        return this.json({'id': req.params.id}, statusCode)
    }


    @httpPost('/refresh-token')
    public async refreshToken(req: express.Request): Promise<JsonResult> {
        const statusCode = 200;
        return this.json({}, statusCode);
    }

    @httpPost('/password/change')
    public async changePassword(req: express.Request): Promise<JsonResult> {
        const statusCode = 200;
        return this.json({}, statusCode);
    }

    @httpPost('/password/request-reset')
    public async requestPasswordReset(req: express.Request): Promise<JsonResult> {
        const statusCode = 200;
        return this.json({}, statusCode);
    }

    @httpPatch('/password/reset')
    public async resetPassword(req: express.Request): Promise<JsonResult> {
      const statusCode = 200;
      return this.json({}, statusCode);
    }
  
    @httpPatch('/account/verify')
    public async verifyAccount(req: express.Request): Promise<JsonResult> {
        const statusCode = 200;
        return this.json({}, statusCode);
    }
 
    @httpPost('/account/send/verification-email')
    public async sendAccountVerificationEmail(req: express.Request): Promise<JsonResult> {
        const statusCode = 200;
        return this.json({}, statusCode);
    }

    @httpPost('/logout')
    public async logout(req: express.Request) {
        const statusCode = 200;
        return this.json({}, statusCode);
    }
}