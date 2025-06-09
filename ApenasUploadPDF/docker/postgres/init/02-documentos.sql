CREATE TABLE IF NOT EXISTS documentos (
    id SERIAL PRIMARY KEY,
    caminho VARCHAR(155),
    id_user INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chave_estrangeira_user_documentos
        FOREIGN KEY (id_user)
        REFERENCES users (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);