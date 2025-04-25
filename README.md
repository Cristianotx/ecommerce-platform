# E-commerce Platform - Monorepo

Este repositório contém todos os projetos relacionados ao sistema de e-commerce SaaS, organizado utilizando [Nx](https://nx.dev/).

## Estrutura

- `apps/admin-frontend/` - Aplicação administrativa (Angular 19, SSR)
- `apps/admin-backend/` - API administrativa (NestJS 11, Fastify)

## Tecnologias principais

- **Nx 20** - Monorepo e orquestração
- **Angular 19** - Front-end administrativo
- **NestJS 11** - API backend
- **Fastify** - Servidor HTTP de alta performance
- **Prisma ORM** - Acesso ao banco de dados PostgreSQL
- **JWT Authentication** - Login seguro
- **Zod** - Validação de entrada de dados
- **Swagger** - Documentação automática da API

## Comandos principais

```bash
# Rodar o frontend
npm run admin:frontend

# Rodar o backend
npm run admin:api

# Rodar o Prisma Studio
npm run prisma:data
