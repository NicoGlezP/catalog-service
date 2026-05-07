import { Router } from "express";
import { createCliente, getClientes } from "../controllers/clientes";

const router = Router();

router.post("/", createCliente);

router.get("/", getClientes);

export default router;
