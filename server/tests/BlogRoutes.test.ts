import fastify from 'fastify';
import { BlogRoutes } from '../src/routes/BlogRoutes';
import request from 'supertest';

const app = fastify();
app.register(BlogRoutes);

describe('BlogRoutes', () => {
  it('should return a 200 status and a message', async () => {
    const res = await request(app).get('/blog');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hello world!');
  });
});