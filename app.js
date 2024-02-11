import express, { json, urlencoded  } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import swaggerDocument from './swagger-output.json' assert { type: "json" };

import swaggerUi from 'swagger-ui-express';

import indexRouter from './routes/index.js';
import NotFoundResponse from './utils/DefaultHttpResponses.js';
import sequelize from './utils/database.js';

sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');   
  })
  .catch(err => {
    console.error('Failed to establish database connection:', err);
  });
var app = express();

app.use(logger('dev'));

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/', indexRouter);


app.use('*', (req, res) => {
    res.status(404).json(NotFoundResponse);

});

export default app;
