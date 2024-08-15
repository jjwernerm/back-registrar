// Importa el módulo mongoose para definir esquemas y modelos de MongoDB.
import mongoose from "mongoose";

// Define un esquema para el modelo 'producto' con los campos y opciones requeridos.
const productoSchema = mongoose.Schema({
  // Campo 'idproducto' con tipo String, requerido y único para asegurar que cada producto tenga un ID único.
  idproducto: {
    type: String,
    required: true,
    unique: true,
  },
  // Campo 'nombre' con tipo String, y se aplica 'trim' para eliminar espacios en blanco al inicio y al final del valor.
  nombre: {
    type: String,
    trim: true
  },
}, 
{
  // Opción para añadir automáticamente las marcas de tiempo de creación y actualización a cada documento.
  timestamps: true,
});

// Crea un modelo de mongoose llamado 'productos' usando el esquema definido.
const producto = mongoose.model('productos', productoSchema);

// Exporta el modelo para que pueda ser utilizado en otros archivos.
export default producto;

// Resumen: Contiene el esquema y modelo de Mongoose para los productos. Define la estructura de los documentos de productos en MongoDB, especificando los campos necesarios como idproducto y nombre, y crea el modelo producto que se usa para interactuar con la colección de productos en la base de datos.