import fastify from 'fastify';
import cors from '@fastify/cors';
import { BlogRoutes } from './routes/blog';

const app = fastify();

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:3000',
};

app.register(cors, corsOptions);
app.register(BlogRoutes);

app.listen({
  port: 3000,
}, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`server listening on ${address}`);
});


