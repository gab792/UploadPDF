import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';


import swagger from '../config/swagger.js';

export default (function () {

    const router = Router();
    router.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger));
    router.get('/env', (request, response) => {
        return response.status(CONSTANTS.HTTP.SUCCESS).json({
            env: process.env,
            CONSTANTS: globalThis.CONSTANTS
        })
    });

    return router;

})();
