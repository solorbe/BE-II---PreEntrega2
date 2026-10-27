// import dotenv from "dotenv";
// import app from "./app.js";
// import { config } from "./config/env.config.js";
// import { connectDB } from './config/database.config.js';
// //import { Server } from "socket.io";

// dotenv.config();

// const PORT = config.port;

// app.listen(PORT, () => {
//   console.log(`Servidor escuchando en http://localhost:${PORT}`);
// });

// const startServer = async () => {
//   await connectDB();
// };

// startServer();

import app from './app.js';
import { config } from './config/config.js';
import { connectDB } from './config/database.js';

await connectDB(config.mongoUrl);

app.listen(config.port, () => {
  console.log(`Servidor escuchando en el puerto ${config.port}`);
});