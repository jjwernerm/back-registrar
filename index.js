// Importa el módulo Express para crear y configurar el servidor.
import express from 'express';

// Importa dotenv para cargar variables de entorno desde un archivo .env.
import dotenv from 'dotenv';

// Importa el middleware CORS para manejar las solicitudes de diferentes dominios.
import cors from 'cors';

// Importa la función conectarDB para conectarse a la base de datos.
import conectarDB from './config/db.js';

// Importa las rutas de productos desde el archivo correspondiente.
import productoRoutes from './routes/productoRoutes.js';

// Crea una aplicación de Express.
const app = express();

// Configura Express para que acepte y parsee datos en formato JSON.
app.use(express.json());

// Carga las variables de entorno desde el archivo .env.
dotenv.config();

// Llama a la función para conectar con la base de datos.
conectarDB();

// Define los dominios permitidos para hacer solicitudes al servidor.
const dominiosPermitidos = [process.env.FRONTEND_URL];

// Configura las opciones para el middleware CORS.
const corsOptions = {
  origin: function (origin, callback) {
    // Verifica si la solicitud proviene de un dominio permitido.
    if (!origin || dominiosPermitidos.indexOf(origin) !== -1) {
      // Si el dominio es permitido, procede con la solicitud.
      callback(null, true);
    } else {
      // Si el dominio no es permitido, rechaza la solicitud.
      callback(new Error('No permitido por CORS'));
    }
  },
};

// Aplica el middleware CORS con las opciones configuradas.
app.use(cors(corsOptions));

// Define el endpoint `/producto` y asocia las rutas de productos con él.
app.use('/producto', productoRoutes);

// Define el puerto en el que el servidor escuchará las solicitudes.
// Si no hay un puerto definido en las variables de entorno, usa el puerto 4000 por defecto.
const PORT = process.env.PORT || 4000;

// Inicia el servidor y escucha en el puerto especificado.
app.listen(PORT, () => {
  // Muestra un mensaje en la consola cuando el servidor esté funcionando.
  console.log(`Servidor funcionando en el puerto: ${PORT}`);
});

// Resumen: Este archivo configura y arranca el servidor Express. Configura el middleware para procesar solicitudes JSON y habilita CORS con restricciones basadas en las variables de entorno. También importa y utiliza las rutas definidas para manejar operaciones relacionadas con los productos y establece el puerto en el que el servidor escuchará las solicitudes.