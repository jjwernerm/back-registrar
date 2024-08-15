// Importa el módulo mongoose para trabajar con MongoDB en Node.js.
import mongoose from 'mongoose';

// Define una función asíncrona para conectar con la base de datos MongoDB.
const conectarDB = async () => {
  try {
    // Intenta conectar a la base de datos usando la URI de MongoDB desde las variables de entorno.
    const db = await mongoose.connect(process.env.MONGO_URI,
      { 
        // Usa el nuevo analizador de URL de MongoDB y la topología unificada.
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    // Construye la URL de la conexión usando el host y el puerto obtenidos de la conexión.
    const url = `${db.connection.host}:${db.connection.port}`
    // Muestra un mensaje en la consola con la URL a la que está conectado MongoDB.
    console.log(`MongoDB conectado en: ${url}`);  
  } catch (error) {
    // Si ocurre un error durante la conexión, muestra el mensaje de error en la consola.
    console.log(`error: ${error.message}`);
    // Termina el proceso con un código de salida 1, indicando un fallo en la conexión.
    process.exit(1);
  };
};

// Exporta la función para que pueda ser utilizada en otros archivos.
export default conectarDB;

// Resumen: Define y establece la conexión a la base de datos MongoDB usando Mongoose. Se encarga de conectar la aplicación a MongoDB mediante una URI proporcionada en las variables de entorno y maneja posibles errores durante el proceso de conexión.