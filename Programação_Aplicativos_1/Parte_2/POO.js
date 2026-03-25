class veiculo {
    #id
    #marca
    #modelo
    #preco
    #disponivel

    constructor(id, marca, modelo, preco) {
        if (new.target === veiculo) {
            throw new Error("Proibido instanciar a classe veiculo...")
        }

        if (marca.length < 2 |
            modelo.length < 2 |
            preco <= 0) {
            throw new Error("Erro de atribuição...")
        }

        this.#id = id
        this.#marca = marca
        this.#modelo = modelo
        this.#preco = preco
        this.#disponivel = true 
    }

    get id() {
        return this.#id
    }

    get marca_modelo() {
        return {marca : this.#marca, modelo : this.#modelo}
    }

    get preco() {
        return "R$ " + this.#preco
    }

    set preco(value) {
        if (!this.#disponivel) {
            throw new Error("Veiculo indisponivel")
        }

        this.#preco = value
    }

    is_available() {
        return this.#disponivel
    }

    sell() {
        if (!this.#disponivel) {
            throw new Error("Veículo indisponível")
        }

        this.#disponivel = false
    }

    display() {
        return {id : this.#id, marca : this.#marca,
                modelo : this.#modelo, preco : this.#preco,
                disponivel : this.#disponivel}
    }

    stock() { // Metodo para reestocar o produto (Não é pedido explicitamente pelo exercício, mas deixa subentendido quano se pede parausar o metodo para retornar ao estoque)
        this.#disponivel = true
    }
}

class carro extends veiculo {
    #portas

    constructor(id, marca, modelo, preco, portas) {
        super(id, marca, modelo, preco)

        // console.log(Number(portas))

        if (isNaN(Number(portas)) | Number(portas) <= 0) {
            throw new Error("Atributo portas inválido...")
        }

        this.#portas = portas
    }
}

class moto extends veiculo {
    #cilindradas

    constructor(id, marca, modelo, preco, cilindradas) {
        super(id, marca, modelo, preco)

        if (isNaN(Number(cilindradas)) | !(Number(cilindradas) >= 50 & Number(cilindradas) <= 2000)) {
            throw new Error("Atributo cilindradas inválido...")
        }
    } 
}

// const teste = new veiculo() //Erro ao instanciar (Proibido)
const parati = new carro("001", "VolksWagen", "1999", 10000, 100)
console.log(parati.display())

parati.preco = 4000
parati.sell()
// parati.stock() Metodo para reestocar
console.log(parati.display())
console.log(parati.preco)

// parati.sell() //Venda inválida
// parati.preco = 1000 //Alteração Inválida

const o_moto = new moto("002", "Moto1", "2000", 10000, 100)
console.log(o_moto.display())
console.log(o_moto.marca_modelo)