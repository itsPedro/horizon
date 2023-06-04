import App from './app';
import { BlogRoutes } from './routes/BlogRoutes';

const app = new App({
  routes: [BlogRoutes]
});

app.listen();