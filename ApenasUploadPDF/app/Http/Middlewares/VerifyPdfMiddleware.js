export default (request, response, next) => {

    if (!request.files || !request.files.documento) {
        return response.status(400)
            .json({ error: 'Nenhum arquivo enviado.' });
    }

    const documento = request.files.documento;
    if (documento.mimetype !== 'application/pdf') {
        return response.status(400)
            .json({ error: 'Apenas arquivos PDF são permitidos.' });
    }

    next();
};