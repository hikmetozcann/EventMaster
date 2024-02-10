import express, { json, urlencoded  } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import NotFoundResponse from './utils/DefaultHttpResponses.js';

var app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);


app.use('*', (req, res) => {
    res.status(404).json(NotFoundResponse);

});

export default app;
