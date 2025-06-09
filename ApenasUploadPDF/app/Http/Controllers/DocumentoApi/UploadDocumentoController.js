import path from 'path';
import fs from 'fs/promises';

// POST /api/documentos/upload
export default async (request, response) => {
    try {
        if (!request.files || Object.keys(request.files).length === 0) {
            return response.status(400).json({ error: 'Nenhum arquivo enviado.' });
        }

        const arquivo = request.files.documento;
        if (!arquivo) {
            return response.status(400).json({ error: 'Campo "documento" não encontrado ou arquivo vazio.' });
        }

        const uploadDir = path.resolve(process.cwd(), 'storage', 'documents');
        await fs.mkdir(uploadDir, { recursive: true });
        const fileName = `${Date.now()}-${arquivo.name}`; 
        const filePath = path.join(uploadDir, fileName);
        await arquivo.mv(filePath);

        return response
            .status(201)
            .json({
                mensagem: 'Documento enviado com sucesso!',
                caminhoCompleto: filePath,
            });

    } catch (error) {
        return response.status(500).json({ error: 'Erro interno do servidor ao processar o upload.' });
    }
};