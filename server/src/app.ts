import fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';

class App {

  public app: FastifyInstance;
  public app_domain: string;
  public app_port: number;

  constructor(appInit: { routes: any; }) {
    this.app = fastify();
    this.app_domain = 'localhost';
    this.app_port = 3000;
    this.routes(appInit.routes);
  };

  private routes(routes: { forEach: (arg0: (route: any) => void) => void; }) {
    routes.forEach((route) => {
      this.app.register(route);
    });
  };

  public listen() {
    this.app.listen({
      port: this.app_port,
      host: this.app_domain,
    }, (err, address) => {
      if (err) {
        this.app.log.error(err);
        process.exit(1);
      }
      console.log(`server listening on ${address}`);
    });
  };

  public cors() {
    this.app.register(cors, {
      credentials: true,
      origin: 'http://localhost:3000',
    });
  };

};



export default App;

