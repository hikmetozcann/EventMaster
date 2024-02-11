import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Event Management System API',
    description: 'This is a simple CRUD API application made with Express and documented with Swagger',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/*.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
