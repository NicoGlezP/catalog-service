import { Request, Response } from "express";
import { db } from "../config/db";

export const createCliente = async (req: Request, res: Response) => {

 const { razon_social, nombre_comercial, rfc, correo, telefono } = req.body;

 const [result] = await db.execute(
  `INSERT INTO clientes
  (razon_social,nombre_comercial,rfc,correo,telefono)
  VALUES (?,?,?,?,?)`,
  [razon_social,nombre_comercial,rfc,correo,telefono]
 );

 res.json(result);
};

export const getClientes = async (req: Request, res: Response) => {

 const [rows] = await db.execute("SELECT * FROM clientes");

 res.json(rows);
};
