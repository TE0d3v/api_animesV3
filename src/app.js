const express = require('express');
const cors = require('cors')
const animesRoutes = require('./routes/animes');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const messagesRoutes = require('./routes/messages');
const Sentry = require('./config/sentry');
require('./models');

const app = express();


app.use(cors())
app.use(express.json());

// app.use(cors({
//     origin: '*', // Permite requisições de qualquer origem
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite os métodos HTTP especificados
//     allowedHeaders: ['Content-Type', 'Authorization'] // Permite os cabeçalhos especificados
// }))

app.use(animesRoutes);
app.use(usersRoutes);
app.use(authRoutes)
app.use(messagesRoutes);

app.get("/debug", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});

Sentry.setupExpressErrorHandler(app);

module.exports = app; // Exporta o app para ser usado em outros arquivos 