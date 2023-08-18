//função nome_da_função(valores que deveram ser fornecidos)
function Empregrado(nome, idade, telefone) {
    
    //this.nome = empregado.nome
    this.nome = nome
    this.idade = idade
    this.telefone = telefone

    //esse this chama a função banco de fora e para utilizada é precisso atribuir um nome a ela
    this.Banco = new Banco()



    //Criação da ação 
    this.info = function () {
        console.log(`Nome: ${nome}, Idade: ${idade}, Telefone: ${telefone}`)
    }

}

//Criação da função de Banco
function Banco() {
    this.saldo = 0


    this.depositar = function (valor) {
        this.saldo += valor
    }

    this.sacar = function (valor) {
        if (this.saldo < valor) {
            console.log(`Saldo insuficiente para saque (Saldo:${this.saldo} - Saque:${valor})`)
        } else { this.saldo -= valor }
    }

    this.exibir = function() {
        console.log(`Saldo: R$${this.saldo}`)
    }
}

//criando as instancias dos empregados
const empregrado1 = new Empregrado("Marcio", 38, "555-1718")
const empregrado2 = new Empregrado("Julia", 24, "555-3839")
const empregrado3 = new Empregrado("Bruno", 31, "555-9894")

empregrado1.info()
empregrado1.Banco.depositar(7000)
empregrado1.Banco.sacar(90)
empregrado1.Banco.exibir()

empregrado2.info()
empregrado2.Banco.depositar(12000)
empregrado2.Banco.sacar(11500)
empregrado2.Banco.exibir()

empregrado3.info()
empregrado3.Banco.depositar(2000)
empregrado3.Banco.sacar(3000)
empregrado3.Banco.exibir()