'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const glob = require('glob');
const path = require('path');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');

require('dotenv').config();

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASSWORD
const DB_PORT = process.env.DB_PORT
const API_BASE_URL = process.env.API_BASE_URL
const SERVER_PORT = process.env.SERVER_PORT || 3000
const SERVER_HOST = process.env.SERVER_HOST || 'localhost'
const SWAGGER_JSON_PATH = process.env.SWAGGER_JSON_PATH || '/swagger.json'
const SWAGGER_DOCUMENTATION_PATH = process.env.SWAGGER_DOCUMENTATION_PATH || '/documentation'
const SWAGGER_UI_PATH = process.env.SWAGGER_UI_PATH || '/swaggerui/'

const dbUrl = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/hostels`;

const init = async () => {
    const server = new Hapi.Server({
        port: SERVER_PORT,
        host: SERVER_HOST,
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });
    const swaggerOptions = {
        info: {
            title: 'API Documentation',
            version: Pack.version,
        },
        jsonPath: SWAGGER_JSON_PATH,
        documentationPath: SWAGGER_DOCUMENTATION_PATH,
        swaggerUIPath: SWAGGER_UI_PATH
    };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ])
    
    const options = {
        ops: {
            interval: 1000
        },
        reporters: {
            myConsoleReporter: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{ log: '*', response: '*' }]
            }, {
                module: 'good-console'
            }, 'stdout'],
        }
    };
    
    await server.register({
        plugin: require('good'),
        options,
    });
    
    glob.sync('api/**/routes/*.js', {
        root: __dirname
    }).forEach(file => {
        const route = require(path.join(__dirname, file))
        // TODO: Use env variable for base url
        route.path = API_BASE_URL + route.path
        server.route(route);
    });
    
    mongoose.connect(dbUrl, {}, (err) => {
        if (err) {
            throw err;
        } else {
            console.log('Connected to MongoDB...')
        }
    });

    await server.start();

    console.log(`Server running at: ${server.info.uri}`);  
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});


init();