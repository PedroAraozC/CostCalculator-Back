const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API de Costos funcionando");
});

// Conexión a MongoDB Atlas
mongoose.connect("TU_STRING_DE_CONEXIÓN_A_MONGODB_ATLAS", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Conectado a MongoDB Atlas");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error("Error al conectar a MongoDB:", err);
});
