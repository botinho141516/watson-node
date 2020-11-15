import { Router } from 'express';
import { createAudioRoute } from './controllers/Audio/create';
import { readAllAudioRoute } from './controllers/Audio/read';

const routes = Router();


routes.get('/', (req, res) => {
  res.status(418).json('i\'m a teapot');
});

routes.post('/audio', createAudioRoute);
routes.get('/audio', readAllAudioRoute);

export { routes };