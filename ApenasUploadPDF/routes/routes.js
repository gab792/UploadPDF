import { Router } from 'express';
import express from 'express';

import api from './api.js';
import web from './web.js';
import JwtAuthMiddleware from '../app/Http/Middlewares/JwtAuthMiddleware.js';
import LoginJwtController from '../app/Http/Controllers/LoginJwtController.js';
import fileUpload from 'express-fileupload';
import CriarUsuariosController from '../app/Http/Controllers/CriarUsuariosController.js';

export default (function () {

    const router = Router();

    router.use(express.json());
    router.use(express.urlencoded({ extended: true }));
    router.use(fileUpload());
    router.use('/api', JwtAuthMiddleware, api);
    router.post('/login', LoginJwtController);
    router.get('/criar-usuarios', CriarUsuariosController);
    router.use('/', web);
    router.use((request, response) => {
        response.status(CONSTANTS.HTTP.NOT_FOUND).json({ error: "Not found" });
    });

    return router;

})();
