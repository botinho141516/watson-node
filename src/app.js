import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import errorHandler from './errors/handler';
import path from 'path';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use('/audios', express.static(path.join(__dirname, '..', 'audios')));

app.use('/', express.static(path.join(__dirname, 'public')));

app.use(routes);

app.use(errorHandler);

export { app };