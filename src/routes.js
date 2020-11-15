import { Router } from 'express';


const routes = Router();


routes.get('/', (req, res) => {
  res.status(418).json('i\'m a teapot');
});

export { routes };