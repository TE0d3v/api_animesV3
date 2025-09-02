const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
    info: {
        version: "3.0.0",
        title: "Api Animes V3",
        description: "Esta documentação descreve a Api Animes"
    },
    servers: [
        {
            url: 'http://localhost:4888'
        }
    ],
    components: {
        schemas: {
            someBody: {
                $id: "1",
                $title: "Naruto",
                description: "esse é o meu jeito ninja de ser",
                raiting: "9.5",
                imageUrl: "http://image.url/naruto.jpg"
            },
            someResponse: {
                name: "Jhon Doe",
                age: 29,
                diplomas: [
                    {
                        school: "XYZ University",
                        year: 2020,
                        completed: true,
                        internship: {
                            hours: 290,
                            location: "XYZ Company"
                        }
                    }
                ]
            },
            someEnum: {
                '@enum': [
                    "red",
                    "yellow",
                    "green"
                ]
            }
        },
        securitySchemes:{
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/app'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index');           // Your project's root file
});