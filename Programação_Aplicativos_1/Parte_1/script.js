const source = "dados.json"
const items = []
// items = require("./dados.json") //Não sei porque o require não está sendo reconhecido :(

console.log(items)

// async function fetchData() {
//     const response = fetch(source)
//     items = await response.json()
// }

// async function setData() {
//     await fetchData()
// }

// setData()

// Ambiente de Variáveis 
const btn_add = document.getElementById("btn_adicionar")

const In_nome = document.getElementById("In_nome")
const In_preco = document.getElementById("In_preco")
const In_qtd = document.getElementById("In_quantidade")

const card_caro = document.getElementById("mais_caro")
const card_qtd = document.getElementById("mais_quantidade")
const card_total = document.getElementById("valor_total")

// Ambiente de Funções
function update_cards() {
    let caro = {"nome" : "", "preco" : 0}
    let qtd = {"nome" : "", "quantidade" : 0}
    let total = 0

    items.forEach(element => {

        if (element.preco >= caro.preco) {
            caro.nome = element.nome
            caro.preco = element.preco
        }

        if (element.quantidade >= qtd.quantidade) {
            qtd.nome = element.nome
            qtd.quantidade = element.quantidade
        }

    })

    total = items.reduce((acc, element) => {
        return acc + (element.preco * element.quantidade)
    }, 0)

    card_caro.innerHTML = caro.nome
    card_qtd.innerHTML = qtd.nome
    card_total.innerHTML = total
}

function register() {
    let nome = In_nome.value.trim()
    let qtd = Number(In_qtd.value.trim())
    let preco = Number(In_preco.value.trim())

    In_nome.value = ""
    In_preco.value = ""
    In_qtd.value = ""

    items.push({ "nome": nome, "categoria": undefined, "preco": preco, "quantidade": qtd })

    update_cards()
}

// Ambiente de Eventos
btn_add.addEventListener("click", register)

// Leitura de dados SEGUNDO TEMA
const apenas_nomes = items.map(element => {
    return {"nome" : element.nome}
})

const acima_500 = items.filter(element => {
    element.preco > 500
})

const total = items.map(element => {
    return{"nome": element.nome, "categoria": element.categoria,
        "preco": element.preco, "quantidade": element.quantidade,
        "total_individual" : element.preco * element.quantidade}
})

const inferior_5 = items.filter(element => {
    element.quantidade < 5
})

const valor_total = items.reduce((acc, x) => {
    return acc + x.preco
}, 0)


const eletronicos = items.filter((x) => x.categoria == "Eletronico")
const total_eletronicos = eletronicos.reduce((acc, x) => {
    return acc + x.preco
}, 0)

const qtd_10 = items.fill((x) => x.quantidade > 10)
const total_10 = qtd_10.reduce((acc, x) => {
    return acc + x.preco
}, 0)

let valor_a_procurar = "teste"
let encontrado = total.find((x) => x.nome === valor_a_procurar)
// Não vi onde implementar o find.  nos exercicios, então eu deixei um exemplo da sintaxe do find acima

let maior = 0
let menor = 0

let caro = 0
let barato = 0

let maior_qtd = 0
let menor_qtd = 0

total.forEach(x => {
    if (x.total_individual >= maior) {
        maior = x.total_individual
    }

    if (x.total_individual <= menor) {
        menor = x.total_individual
    }

    if (x.preco >= caro) {
        caro = x.preco
    }

    if (x.preco <= barato) {
        barato = x.preco
    }

    if (x.quantidade >= maior_qtd) {
        maior_qtd = x.quantidade
    }

    if (x.quantidade <= menor_qtd) {
        menor_qtd = x.quantidade
    }
})

let media = total.reduce((acc, x) => {
    return acc + x.preco / total.length
}, 0)

let media_total = total.reduce((acc, x) => {
    return acc + x.total_individual / total.length
}, 0)

console.log(total)