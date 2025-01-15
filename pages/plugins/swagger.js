import fastifySwagger from "fastify-swagger";

const swaggerPlugin = async (fastify) => {
  fastify.register(fastifySwagger, {
    routePrefix: "/documentation",
    openapi: {
      info: {
        title: "Scholarship API",
        description: "API for managing scholarships",
        version: "1.0.0",
      },
    },
    exposeRoute: true,
  });
};

export default swaggerPlugin;
