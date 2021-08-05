import { inject, injectable } from 'inversify'
import { Error } from 'mongoose'
import { IUser } from './../interfaces/user'

@injectable()
export class AuthService {

    public async authenticate() : Promise<any> {

    }

    public async refreshToken() : Promise<any> {

    }

    public async revokeToken() : Promise<any> {

    }

    public async sendAccountVerificationEmail() : Promise<String> {
        return ''
    }

    public async sendAccountVerificationEmailByEmail() : Promise<string> {
        return ''
    }

    public async signup(): Promise<any> {
    
    
    }

    public async changePassword(id: string, oldPassword: string, newPassword: string): Promise<any> {

    }

    private async getRefreshToken(token: string) {

    }

    private generateRandomToken(): string {
       return '' 
    }

    private async generateSalt(): Promise<string> {
        return ''
    }

    private generateJwtToken(user: IUser) {

    }

    private generateRefreshToken(user: IUser, ipAddress: string) {

    }

    private basicDetails(user: IUser) {

    }

    public async requestPasswordReset(email: string): Promise<string> {
        return ''
    }

    public async resetPassword(userId: string, token: string, password: string): Promise<boolean> {
        return true;
    }

    public async verifyAccount(userId: string, token: string): Promise<boolean> {
        return true;
    }
}