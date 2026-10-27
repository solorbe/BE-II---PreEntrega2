// import express from 'express';

// import ticketRouter from './routes/tickets.routes.js';
// import eventRouter from './routes/events.routes.js';
// import userRouter from './routes/users.routes.js';
// const app = express();

// // express.json() es un middleware que parsea el body de las peticiones entrantes cuando vienen con Content-Type: application/json, y lo deja disponible como objeto JS en req.body. 

// // Sin este middleware,en un POST o PUT, req.body llega undefined, aunque el cliente sí haya mandado JSON.
// // El orden de app.use() importa: los middlewares se ejecutan en el orden en que se registran, y las rutas de más abajo solo ven el
// // resultado de los middlewares que se registraron antes. Entonces; express.json() va primero: así req.body ya está listo para cuando
// // llegue a cualquier ruta.
// app.use(express.json());

// // Un middleware recibe (req, res, next). Es OBLIGATORIO llamar a next() cuando termina su trabajo: eso le dice a Express "seguí con el próximo middleware o ruta". Si no lo llamamos, la petición queda colgada para siempre (el cliente nunca recibe respuesta).
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

// // Endpoints de estado del servidor (no son un recurso de la API, por eso
// // se quedan acá y no en un router).
// app.get('/', (req, res) => {
//   res.status(200).json({
//     mensaje: 'Backend II',
//     status: 'activo',
//   });
// });

// app.get('/health', (req, res) => {
//   // process.uptime() devuelve, en segundos, cuánto tiempo lleva
//   // corriendo el proceso de Node. Es un chequeo típico para saber
//   // si el servidor sigue "vivo".
//   res.status(200).json({
//     status: 'ok',
//     uptime: process.uptime(),
//   });
// });


// app.use('/api/tickets', ticketRouter);
// app.use('/api/events', eventRouter);
// app.use('/api/users', userRouter);

//export default app;


import express from 'express';


import healthRouter from './routes/health.routes.js';
import eventsRouter from './routes/events.routes.js';
import ticketsRouter from './routes/tickets.routes.js';
import usersRouter from './routes/users.routes.js';
import sessionsRouter from './routes/sessions.routes.js'

const app = express();

app.use(express.json());

app.use('/api/health', healthRouter);
app.use('/api/events', eventsRouter);
app.use('/api/tickets', ticketsRouter);
app.use('/api/users', usersRouter);
app.use('/api/sessions', sessionsRouter);

export default app;