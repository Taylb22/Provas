import express from "express"
import funcionarios from "./endpoints/funcionarios.js"

export default function(app) {
    app
    .use(express.json())
    .use("/funcionarios", funcionarios)
}