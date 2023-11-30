import db from '../database/db.js';

const getById = async (id) => {
    const query = "SELECT id, content FROM message WHERE id = ?"
    const result = await db.query(query, [id])
    return result[0]
}

const create = async (chat) => {

   
    
    const { content, user_id} = chat
    const query = "INSERT INTO message (content, user_id) VALUES (?, ?)"
    const result = await db.query(query, [content, user_id])
    return result
}

const getAll = async (id) => {   
    const query = "SELECT m.content, u.name FROM message AS m INNER JOIN users AS u ON m.user_id = u.id;"
    const result = await db.query(query, [id])
    return result
}

const remove = async (id) => {
    const query = "DELETE FROM message WHERE id = ?"
    const result = await db.query(query, [id])
    return result
}

export default { getById, create, remove, getAll };
