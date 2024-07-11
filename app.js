require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:3000',  // Reemplaza con la URL de tu frontend en producción
    credentials: true  // Permite enviar cookies y otros datos de autenticación
};

app.use(cors(corsOptions));

// Rutas
app.use('/', require('./routes/index'));

// Puerto
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});