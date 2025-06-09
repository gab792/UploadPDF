import { Router } from 'express';
import UploadImageController from '../../app/Http/Controllers/DocumentoApi/UploadDocumentoController.js';
import VerifyPdf from '../../app/Http/Middlewares/VerifyPdfMiddleware.js';

export default (function () {

    const router = Router();

    router.post('/documentos/upload', VerifyPdf, UploadImageController);

    return router;

})();