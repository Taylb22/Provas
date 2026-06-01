import { response } from "express"
import connection from "../database/db.js"
import { parse } from "dotenv"

export function getAll (req, res) {
    connection.query(`SELECT * FROM V_funcionarios`,
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error"
                })
            }
            console.log(response)
            return res.status(200).send(response)
        }
    )
}

export function getSetor(req, res) {
    const {setor} = req.params
    connection.query(`SELECT * FROM V_funcionarios WHERE setor = ?`, [setor],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error",
                    message : err.message
                })
            }
            console.log(response)
            return res.status(200).send(response)
        }
    )
}

export function register (req, res) {
    const {nome, sobrenome, setor, funcao} = req.body
    
    connection.query(`INSERT INTO funcionario 
                    VALUES
                    (default, ?, ?, ?, ?)`,
        [nome, sobrenome, setor, funcao],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error",
                    messge : err.message
                })
            }
            return res.status(200).send({
                sucess : "Employee registered sucesfully"
            })
        })
}

export function erase (req, res) {
    const {id} = req.params
    connection.query(`DELETE FROM funcionario WHERE id_funcionario = ?`,
                      [id],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error",
                    messge : err.message
                })
            }

            return res.status(200).send({
                error : "Employee deleted"
            })
        }
    )
}

export function update (req, res) {
    const {id} = req.params
    const {nome, sobrenome, setor, funcao} = req.body
    
    connection.query(`UPDATE funcionario 
                    SET
                    nome = ?,
                    sobrenome = ?,
                    id_setor = ?,
                    id_funcao = ?
                    WHERE id_funcionario = ?`,
        [nome, sobrenome, setor, funcao, id],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error : "Internal server error"
                })
            }
            return res.status(200).send({
                sucess : "Employee updated sucesfully"
            })
        })
}