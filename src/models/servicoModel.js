import db from '../database/db.js'
const getById = async (id) => {
    return await db.query("SELECT name, gral, date, price FROM servico where id = ?", [id])
}

const getAll = async (id) => {
    console.log(id)
       return await db.query("SELECT id, name, gral, date, price FROM servico where user_id = ?", [id])
} 
//SELECT s.id, u.name, s.gral, s.date, s.price FROM servico AS s INNER JOIN users AS u ON s.user_id = u.id;

const create = async (servico) => {
    const { name, gral, date, price, user_id } = servico;
    return await db.query("INSERT INTO servico (name, gral, date, price, user_id) VALUES (?, ?, ?, ?, ?);", [name, gral, date, price, user_id]);
};

const update = async (servico) => {
    const { id, name, gral, date, price } = servico;
    return await db.query("UPDATE servico SET name = ?, gral = ?, date = ?, price = ? WHERE id = ?;", [name, gral, date, price, id]);
};

const remove = async (id) => {
    const query = "DELETE FROM servico WHERE id = ?"
    const result = await db.query(query, [id])
    return result
}

export default { getById, create, update, remove, getAll };
