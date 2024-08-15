// Importa el módulo express para manejar rutas en la aplicación.
import express from 'express';

// Crea una nueva instancia del enrutador de Express.
const router = express.Router();

// Importa la función 'registrarProducto' del controlador de productos.
import { registrarProducto } from '../controllers/productoControllers.js';

// Define una ruta POST para el endpoint '/registrar' y asigna la función 'registrarProducto' como manejador.
router.post('/registrar', registrarProducto);

// Exporta el enrutador para que pueda ser utilizado en otros archivos.
export default router;

// Resumen: Configura las rutas para las operaciones relacionadas con los productos. Define las rutas HTTP (como POST) que permiten interactuar con los productos y vincula estas rutas a los controladores correspondientes que procesan las solicitudes.