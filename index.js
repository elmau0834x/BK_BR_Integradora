import express from 'express'
import csurf from 'csurf'
import cookieParser from 'cookie-parser'
import usuarioRoutes from './routes/usuarioRoutes.js'
import propiedadesRoutes from './routes/propiedadesRoutes.js'
import appRoutes from './routes/appRoutes.js'
import apiRoutes from './routes/apiRoutes.js'
import db from './config/db.js'

//crear la app
const app = express()

//habilitar lectura de datos de formularios

app.use(express.urlencoded({ extended: true }))

//Habilitar cookie Parser
app.use(cookieParser())

//habilitar csurf
app.use(csurf({ cookie: true }))

//conexion a la bd
// Conexion a la base de datos con manejo de errores adecuado
const conectarDB = async () => {
    try {
        await db.authenticate();  // Verifica que la conexión a la base de datos sea exitosa
        await db.sync();  // Sincroniza los modelos (si es necesario)
        console.log('Conexión a la base de datos exitosa!!!');
    } catch (error) {
        console.error('Error de conexión a la base de datos:', error);
    }
}

conectarDB();  // Llamada a la función para realizar la conexión



//habilitar pug
app.set('view engine', 'pug')
app.set('views', './views')

//Carpeta publica
app.use(express.static('public'))


//roting
app.use('/', appRoutes)
app.use('/auth', usuarioRoutes)
app.use('/', propiedadesRoutes)
app.use('/api', apiRoutes)

//definir un puerto y arrancar el proyecto
const port = process.env.BACKEND_PORT;
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});