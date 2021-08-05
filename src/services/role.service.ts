import { injectable } from 'inversify';
import _ from 'lodash';
import { IRole } from '../interfaces/role';

@injectable()
export class RoleService {

    public async seedRoles(roles: IRole[]) {

    }
    
    public async getDropdownList(): Promise<any> {
        return []
    }
}