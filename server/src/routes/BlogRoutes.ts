
async function BlogRoutes(server: any) {
  server.get('/blog', function (request: any, reply: any) {
    reply.send(200, { message: 'Hello world!' })
  });

};

export { BlogRoutes } ;