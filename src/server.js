import { app } from './app';
import { routes } from './routes';

app.use(routes);

app.listen(8000, () => {
  console.log('listening on port 8000');
})