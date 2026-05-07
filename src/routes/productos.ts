import { Router } from "express";
import { createProducto, getProductos } from "../controllers/productos";

const router = Router();

router.post("/", createProducto);

router.get("/", getProductos);

export default router;
