const express = require("express");
const bodyParser = require("body-parser");
require("../config/connection"); // Importa la connessione al database
const cors = require("cors");
const userRoutes = require("../routes/user.routes");

const app = express();
const domain = process.env.DOMAIN;
const test = process.env.DOMAIN_TEST;

// Middleware per processare JSON
app.use(bodyParser.json());

// Middleware per abilitare CORS
app.use(
  cors({
    origin: [test, domain],
    credentials: true, // Abilita l'invio di credenziali
    maxAge: 1800, // Imposta il tempo massimo di memorizzazione della risposta preflight in cache
    allowedHeaders: "Content-Type", // Specifica gli header consentiti
    methods: "PUT, POST, GET, DELETE", // Rimuovi "OPTIONS" dai metodi consentiti
  })
);

// Usa le rotte definite in userRoutes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
