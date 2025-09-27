# Ecommerce Users API

## ¿Qué hace el proyecto?
Este proyecto implementa un sistema backend para la gestión de usuarios en un ecommerce. Permite crear, leer, actualizar y eliminar usuarios (CRUD), así como autenticarlos y autorizarlos mediante JWT y Passport. Incluye encriptación de contraseñas y rutas protegidas.

## ¿Qué problemática propone resolver?
Resuelve la necesidad de gestionar usuarios de forma segura en una aplicación de comercio electrónico, asegurando que los datos sensibles estén protegidos y que solo usuarios autenticados puedan acceder a información privada o realizar acciones críticas.

## Stack de tecnologías utilizadas
- **Node.js**: Entorno de ejecución para JavaScript en el backend.
- **Express**: Framework para crear el servidor y las rutas HTTP.
- **MongoDB + Mongoose**: Base de datos NoSQL y ODM para modelar los datos.
- **Passport**: Middleware para autenticación y autorización.
- **JWT (jsonwebtoken, passport-jwt)**: Tokens para sesiones seguras.
- **bcrypt**: Encriptación de contraseñas.

## Tutorial paso a paso para testear usando Postman

1. **Instalación y ejecución**
   - Instala las dependencias:
     ```
     npm install
     ```
   - Inicia el servidor:
     ```
     npm start
     ```

   - El servidor estará disponible en `http://localhost:3000/`

2. **Importar la colección de Postman**
   - Ve a la carpeta `postmanApiCollection` y selecciona el archivo `usersApiCollection.json`.
   - En Postman, haz clic en "Import" y selecciona el archivo.
   - Se cargarán todos los endpoints necesarios para probar el sistema.

3. **Probar los endpoints**
   - **Crear Usuario**: Envía una petición `POST` a `/api/users` con los datos del usuario.
   - **Login Usuario**: Envía una petición `POST` a `/api/sessions/login` con email y contraseña. Recibirás un JWT en la respuesta.
   - **Obtener Usuarios**: Envía una petición `GET` a `/api/users` para ver todos los usuarios.
   - **Obtener Usuario por ID**: Envía una petición `GET` a `/api/users/{userId}`.
   - **Actualizar Usuario**: Envía una petición `PUT` a `/api/users/{userId}` con los datos a modificar.
   - **Eliminar Usuario**: Envía una petición `DELETE` a `/api/users/{userId}`.
   - **Obtener Usuario Actual (JWT)**: Envía una petición `GET` a `/api/sessions/current` agregando el JWT en el header `Authorization: Bearer <token>`.

4. **Notas importantes**
   - El JWT se obtiene en la respuesta del login y debe usarse en las rutas protegidas.
   - Reemplaza `{userId}` por el ID real del usuario.
   - Si tienes dudas sobre los bodies, headers o el uso de la colección, revisa los ejemplos incluidos en la colección de Postman.

---

¡Enjoy!🍷👍😎🍻
