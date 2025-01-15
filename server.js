// server.js
const fastify = require('fastify')();
const next = require('next');
const fastifyHttpProxy = require('fastify-http-proxy');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  fastify.register(fastifyHttpProxy, {
    upstream: 'http://localhost:3000', // The Next.js app will run on this port
    prefix: '/api', // Proxy API routes to Fastify
  });

  fastify.get('*', (req, res) => {
    return handle(req.raw, res.raw);
  });

  fastify.listen(3001, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log('Server running on http://localhost:3001');
  });
});
