const swaggerConfig = {
    swagger: '2.0',
    info: {
        title: 'Blogtracer Web API',
        description: 'Blogtracer Web API v1.0',
        version: '1.0',
    },
    host: 'localhost:5000',
    basePath: '',
    securityDefinitions: {
        Authorization: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
            description: "Authentication token"
        }
    },
    paths: {
        '/auth/token': {
            post: {
                tags: [
                    'Authentication'
                ],
                summery: 'Logs user into the system',
                operationId: 'auth-token',
                consumes: [
                    'application/json'
                ],
                produces: [
                    'application/json',
                ],
                parameters: [
                    {
                        in: 'body',
                        name: 'body',
                        description: 'Token object that needs to get guest token',
                        required: true,
                        schema: {
                            $ref: '#/definitions/TokenInputDto'
                        }
                    },
                ],
                'responses': {
                    'default': {
                        'description': 'successful operation'
                    }
                }
            }
        },
        '/auth/login': {
            post: {
                tags: [
                    'Authentication'
                ],
                summery: 'Logs user into the system',
                description: '',
                operationId: 'auth-login',
                consumes: [
                    'application/json'
                ],
                produces: [
                    'application/json',
                ],
                parameters: [
                    {
                        in: 'body',
                        name: 'body',
                        description: 'Login object that needs to be login',
                        required: true,
                        schema: {
                            $ref: '#/definitions/LoginInputDto'
                        }
                    },
                ],
                responses: {
                    default: {
                        description: 'successful operation'
                    }
                }
            }
        },
        '/auth/register': {
            post: {
                tags: [
                    'Authentication'
                ],
                summery: 'Registers user into the system',
                description: '',
                operationId: 'auth-register',
                consumes: [
                    'application/json'
                ],
                produces: [
                    'application/json',
                ],
                parameters: [
                    {
                        in: 'body',
                        name: 'body',
                        description: 'Register object that needs to be login',
                        required: true,
                        schema: {
                            $ref: '#/definitions/RegisterInputDto'
                        }
                    },
                ],
                responses: {
                    default: {
                        description: 'successful operation'
                    }
                }
            }
        }
    },
    definitions: {
        TokenInputDto: {
            type: 'object',
            required: [
                'id',
                'username',
                'email'
            ],
            properties: {
                id: {
                    type: 'string',
                    example: '876253e8-06fe-4ce2-a7af-55bfc6cf9493'
                },
                username: {
                    type: 'string',
                    example: 'aedawn'
                },
                email: {
                    type: 'string',
                    example: 'alierenguner@hotmail.com'

                }
            }
        },
        LoginInputDto: {
            type: 'object',
            required: [
                'loginId',
                'password'
            ],
            properties: {
                loginId: {
                    type: 'string',
                    example: 'alierenguner'
                },
                password: {
                    type: 'string',
                    example: 'ae1234'

                }
            }
        },
        RegisterInputDto: {
            type: 'object',
            required: [
                'name',
                'username',
                'email',
                'password'
            ],
            properties: {
                name: {
                    type: 'string',
                    example: 'Ali Eren'
                },
                username: {
                    type: 'string',
                    example: 'test 1'
                },
                email: {
                    type: 'string',
                    example: 'test1@gmail.com'
                },
                password: {
                    type: 'string',
                    example: 'ae1234'
                }
            }
        }
    },
    security: [
        {
            Authorization: []
        }
    ]
} as any

export default swaggerConfig;