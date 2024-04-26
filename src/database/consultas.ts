import { type IRecurso, db } from "./dbMySQL";
import { type ResultSetHeader} from "mysql2"

//Obtener los recursos según categoría
export const getResourcesByCategory = async (tipo: string) => {
    try {
        const connection = await db.getConnection();
        const query = `SELECT * FROM Recurso WHERE Tipo = '${tipo}'`;
        const [rows] = await connection.execute<IRecurso[]>(query, [tipo]);
        connection.release();
        
        return rows || [];
    } catch (error) {
        console.error('Error getting resources by category:', error);
    }
}