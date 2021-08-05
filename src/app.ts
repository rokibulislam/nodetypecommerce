import 'reflect-metadata';
import * as express from 'express';
import cors from 'cors';
import fs from 'fs'
import morgan from 'morgan'
import { join } from 'path'
import * as bodyParser from 'body-parser'
import * as swagger from 'swagger-express-ts'
import { InversifyExpressServer } from 'inversify-express-utils';
import { DbConnection } from './db/utils/connection.db';


require('dotenv').config();
import './controllers';
import { ContainerConfigLoader } from './config/container'

export const container = ContainerConfigLoader.Load();

DbConnection.initConnection().then(mongod => {
    DbConnection.setAutoReconnect();
    // create server
    let server = new InversifyExpressServer(container);
    const nodeEnvironment = process.env.NODE_ENV || 'development';
    
    server.setConfig((app) => {
        app.use(
            bodyParser.urlencoded({
                extended: true
            })
        )
        app.use(cors())
        app.use(bodyParser.json())
        app.use(morgan('combined'))
    });

    let serverInstance = server.build();
    serverInstance.listen(process.env.PORT);
    console.log(`Server started on port ${process.env.PORT} :)`);
});

