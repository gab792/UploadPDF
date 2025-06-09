# Desenvolvimento Web - Aula 13: Middleware
Conforme requisitado, alterei: ```VerifyPdfMiddleware.js``` & ```UploadDocumentoController.js```

## Instalação & Execução
1. Clonar o repositório:

   ```sh
   git clone https://github.com/HyppersLoyvenus/ApenasUploadPDF.git
   ```

2. Entrar na pasta do projeto:

   ```sh
   cd ApenasUploadPDF
   ```

3. Criar o arquivo `.env` na raiz do projeto copiando o .env.example:

   ```ini
   copy .env.example .env
   ```

4. Abrir o arquivo .env recém criado e preencher os campos abaixo:

    ```sh
    POSTGRES_USER
    POSTGRES_PASSWORD
    JWT_SECRET
    ```

5. Subir a aplicação com Docker Compose:

   ```sh
   docker-compose up --build -d
   ```
   > servidor estará disponível em: http://localhost:8080

6. Criar os usuários acessando essa rota: [http://localhost:8080/criar-usuarios](http://localhost:8080/criar-usuarios)

    Essa etapa é importante, pois sem criar os usuários não será possível ter acesso a um Token

7. Abrir o Insomnia & importar o ```Insomnia_Requests.yaml```
   
    Faça um "Send" no método ```POST Login``` e copie o Token que será gerado.\
    Depois, no ```POST Enviar PDF``` vá em "Headers" e na frente de "Bearer" do campo "Authorization", cole o Token copiado.
      ```sh
      Header: Authorization
      Value: Bearer <token-aqui>
      ```
    Agora vá em "Body" e em "Choose File", selecione o PDF que quer enviar.
