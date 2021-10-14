# Machines API

Aplicação feita como ativadade prática de desenvolvimento backend. 

## Ferramentas utilizadas
- Node.js
- Prisma - Open Source ORM
- Express
- Swagger - Documentação de APIs RESTful
- PostgreSQL

Machines App permite adicionar, editar e remover máquinas (nome) e status (código, nome).
Também armazena eventos das máquinas e seus status.

Para instalar, execute
```
npm i
npm run build
npx prisma migrate dev
```
Crie um arquivo .env na pasta raiz para definir a URL de conexão do banco de dados
```
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
```
Execute a aplicação com
```
npm run start
```
Depende do Node.js, PostgreSQL instalados.

A documentação da API pode ser acessada pelo caminho
http://localhost:4001/api-docs/
