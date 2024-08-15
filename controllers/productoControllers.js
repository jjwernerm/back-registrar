// Importa el modelo de producto desde el archivo 'productoModels.js'.
import productoModels from '../models/productoModels.js';

// Define la función 'registrarProducto' que maneja la lógica para registrar un nuevo producto.
const registrarProducto = async (req, res) => {
  try {
    // Extrae 'idproducto' y 'nombre' del cuerpo de la solicitud.
    const { idproducto, nombre } = req.body;

    // Verifica si el campo 'idproducto' está vacío.
    if (!idproducto) {
      // Si el campo está vacío, devuelve una respuesta con el estado 400 y un mensaje de error.
      return res.status(400).json({ msg: 'El campo Id Producto es obligatorio' });
    }

    // Verifica si ya existe un producto con el 'idproducto' proporcionado en la base de datos.
    const productoExiste = await productoModels.findOne({ idproducto });

    // Si el producto ya existe, devuelve una respuesta con el estado 400 y un mensaje de error.
    if (productoExiste) {
      return res.status(400).json({ msg: `El producto con el Id: ${idproducto} ya existe` });
    }

    // Crea una nueva instancia del modelo de producto con los datos del cuerpo de la solicitud.
    const producto = new productoModels(req.body);

    // Guarda el nuevo producto en la base de datos.
    await producto.save();

    // Devuelve una respuesta exitosa con un mensaje de confirmación.
    res.json({
      msg: `El producto ${nombre} ha sido registrado con el Id: ${idproducto}`
    });

  } catch (error) {
    // En caso de error, devuelve una respuesta con el estado 400 y un mensaje de error.
    res.status(400).json({ msg: 'Error en la solicitud: contactar al administrador' });
    // Registra el error en la consola para fines de depuración.
    console.log(`Error ${error.status || 400}: ${error.message}`);
  }
};

// Exporta la función 'registrarProducto' para que pueda ser utilizada en otros archivos.
export { registrarProducto };

// Resumen: Contiene la lógica para manejar las solicitudes relacionadas con productos. Implementa la función registrarProducto que valida los datos recibidos, verifica si el producto ya existe, crea un nuevo producto y responde con un mensaje de éxito o error según el resultado de la operación.