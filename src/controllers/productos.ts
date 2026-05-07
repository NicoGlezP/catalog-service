import { Request, Response } from "express";
import { db } from "../config/db";

export const createProducto = async (req: Request, res: Response) => {

 const { nombre, unidad_medida, precio_base } = req.body;

 const [result] = await db.execute(
  `INSERT INTO productos (nombre, unidad_medida, precio_base)
   VALUES (?, ?, ?)`,
  [nombre, unidad_medida, precio_base]
 );

 res.json(result);
};

export const getProductos = async (req: Request, res: Response) => {

 const [rows] = await db.execute(
  `SELECT * FROM productos`
 );

 res.json(rows);
};
