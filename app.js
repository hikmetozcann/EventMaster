import express, { json, urlencoded  } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import swaggerDocument from './swagger-output.json' assert { type: "json" };

import swaggerUi from 'swagger-ui-express';

import indexRouter from './routes/index.js';
import NotFoundResponse from './utils/DefaultHttpResponses.js';
import sequelize from './utils/database.js';


sequelize.authenticate().then(res => sequelize.sync()).catch(err => console.log(err))
import './models/index.js';

var app = express();

app.use(logger('dev'));

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/index', indexRouter);


app.use('*', (req, res) => {
    res.status(404).json(NotFoundResponse);

});

export default app;
