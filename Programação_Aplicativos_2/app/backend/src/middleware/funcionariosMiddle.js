export function validateRegister(req, res, next) {
    next()
}

export function validateId(req, res, next) {
    let {id} = req.params
    id = parseInt(id)

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).send({
            error : "Provided invalid id"
        })
    }

    next()
}

export function validateJson(req, res, next) {
    let {nome, sobrenome, setor, funcao} = req.body

    if (!nome.trim() || !sobrenome.trim()) {
        return res.status(400).send({
            error : "Null name / surname",
            list_values : [nome, sobrenome, setor, funcao]
        })
    }

    if (!Number.isInteger(setor) || !Number.isInteger(funcao)) {
        return res.status(400).send({
            error : "Invalid sector / func",
            list_values : [nome, sobrenome, setor, funcao]
        })
    }

    next()
}