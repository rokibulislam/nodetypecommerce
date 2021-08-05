import { Container } from 'inversify';

import TYPES from '../constants/types';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { RoleService } from '../services/role.service';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

export class ContainerConfigLoader {
    
    public static Load(): Container {
        require('dotenv').config();
        
        const container = new Container();
        container.bind<UserService>(TYPES.UserService).to(UserService);
        container.bind<AuthService>(TYPES.AuthService).to(AuthService);
        container.bind<ProductService>(TYPES.ProductService).to(ProductService);
        container.bind<CategoryService>(TYPES.CategoryService).to(CategoryService);
        container.bind<RoleService>(TYPES.CategoryService).to(RoleService);

        return container;
    }
}