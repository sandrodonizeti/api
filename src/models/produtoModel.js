import db from '../database/db.js'
const getById = async (id) => {
    return await db.query("SELECT name, valor, codigo FROM produto where id = ?", [id])
}

const create = async (user) => {
    const {name, codigo, valor} = produto
    return await db.query("INSERT INTO produto (name, codigo, valor) VALUES(?, ?, ? );",[name, codigo, valor])
}
const getAll = async () => {
       return await db.query("SELECT id, name, codigo, valor FROM produto")
}

const update = async (user) => {
    const {name, codigo, valor} = produto
    return await db.query("UPDATE produto SET name = ?. codigo = ?, valor = ? WHERE id = ?;",[name, codigo, valor])
}

const remove = async (id) => {
    const {name, codigo, valor} = produto
    return await db.query("DELETE FROM produto  WHERE id = ?;", [id])
}

export default {getById, create, update, remove, getAll}