import express from "express";
import cors from "cors";

import clientesRoutes from "./routes/clientes";
import productosRoutes from "./routes/productos";
import domiciliosRoutes from "./routes/domicilios";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/clientes", clientesRoutes);
app.use("/productos", productosRoutes);
app.use("/domicilios", domiciliosRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`API corriendo en puerto ${PORT}`);
});
