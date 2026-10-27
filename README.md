# PreEntrega 1 - Backend II

<!-- ;
endpoints principales;
ejemplos de uso;
 -->

## Descripción del proyecto

Es una API backend para una plataforma de eventos, inscripciones y reservas de tickets.

Se elige esta temática para realizar las entregas solicitadas en el curso de Backend II.

## Entidades principales

- User
- Event
- Session
- Ticket (reservas de cada event)

## Roles del proyecto a trabajar en las próximas entregas

**Admin**: con permisos generales sobre el sistema.
Podrá gestionar usuarios, categorías, eventos e inscripciones.
**Organizer**: crea y administra eventos.
**User**: consulta eventos o reserva tickets.

## Requisitos técnicos

- Node.js
- git
- una cuenta de **MongoDB Atlas**

## Instrucciones de instalación

```bash
git clone
npm install express dotenv mongoose 
completar .env.example .env  
npm run dev
```

## Variables de entorno

Se definen en .env

En .env.example se encuentran disponibles los nombres de las variables que resultan necesarias para el funcionamiento de esta aplicación.

## Flujo de una petición en Preentrega I

```bash
Cliente -> Routers -> Controllers -> Model
```

Routes: definen endpoints.
Controllers: reciben request y devuelven response.
Models: esquema del recurso.
<!-- Services: manejan lógica de negocio.
Repositories: organizan operaciones de datos.
DAOs: interactúan con la persistencia.
DTOs: definen qué información se expone. 
Middlewares: procesan validaciones intermedias.-->

## Endpoint definidos en Preentrega I para usar en Postmam

Con el servidor corriendo (por defecto en `http://localhost:3000`, salvo que haya cambiado `PORT` en `.env`):

| Método | URL | Respuesta esperada |
|---|---|---|
| GET | `http://localhost:3000/api/health` | {"status": "ok", "message": "Servidor activo"} |
| GET | `http://localhost:3000/api/sessions` | [] |
| GET | `http://localhost:3000/api/events` | [] |
