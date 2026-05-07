import { Router } from "express";
import {
 createDomicilio,
 getDomicilios,
 getDomiciliosCliente,
 updateDomicilio,
 deleteDomicilio
} from "../controllers/domicilios";

const router = Router();

router.post("/", createDomicilio);

router.get("/", getDomicilios);

router.get("/cliente/:cliente_id", getDomiciliosCliente);

router.put("/:id", updateDomicilio);

router.delete("/:id", deleteDomicilio);

export default router;
