const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.routes");
require("./config/connection"); // Importa la connessione al database
const cors = require("cors");

const app = express();

// Middleware per processare JSON
app.use(bodyParser.json());

// Middleware per abilitare CORS
app.use(cors({ origin: "http://localhost:5173" }));

// Usa le rotte definite in userRoutes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
