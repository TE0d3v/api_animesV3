const express = require('express');
const cors = require('cors')
const animesRoutes = require('./src/routes/animes');
const usersRoutes = require('./src/routes/users');
const authRoutes = require('./src/routes/auth');
const Sentry = require('./src/config/sentry');
require('./src/models');

const app = express();
const port = 4888;

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

app.get("/debug", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});

Sentry.setupExpressErrorHandler(app);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}) 