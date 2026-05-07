import { Request, Response } from "express";
import { db } from "../config/db";

export const createDomicilio = async (req: Request, res: Response) => {

 const { cliente_id, domicilio, colonia, municipio, estado, tipo } = req.body;

 const [result] = await db.execute(
  `INSERT INTO domicilios
  (cliente_id, domicilio, colonia, municipio, estado, tipo)
  VALUES (?,?,?,?,?,?)`,
  [cliente_id, domicilio, colonia, municipio, estado, tipo]
 );

 res.json(result);
};

export const getDomicilios = async (req: Request, res: Response) => {

 const [rows] = await db.execute(
  `SELECT * FROM domicilios`
 );

 res.json(rows);
};

export const getDomiciliosCliente = async (req: Request, res: Response) => {

 const { cliente_id } = req.params;

 const [rows] = await db.execute(
  `SELECT * FROM domicilios WHERE cliente_id = ?`,
  [cliente_id]
 );

 res.json(rows);
};

export const updateDomicilio = async (req: Request, res: Response) => {

 const { id } = req.params;
 const { domicilio, colonia, municipio, estado, tipo } = req.body;

 await db.execute(
  `UPDATE domicilios
   SET domicilio=?, colonia=?, municipio=?, estado=?, tipo=?
   WHERE id=?`,
  [domicilio, colonia, municipio, estado, tipo, id]
 );

 res.json({ message: "Domicilio actualizado" });
};

export const deleteDomicilio = async (req: Request, res: Response) => {

 const { id } = req.params;

 await db.execute(
  `DELETE FROM domicilios WHERE id=?`,
  [id]
 );

 res.json({ message: "Domicilio eliminado" });
};
