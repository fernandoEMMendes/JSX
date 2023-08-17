const minhaConta = conta(789, 1000)
minhaConta.depositar(500)
minhaConta.sacar(300)
minhaConta.juros(0.1)
minhaConta.emprestimo(1000)
minhaConta.prestacao(800)


function conta(numero, saldoInicial) {
    return {
        saldo: saldoInicial,


        depositar: function(valor) {
            this.saldo += valor
            console.log(`Com o depósito de ${valor}, o novo saldo da conta ${numero} é: ${this.saldo}`)
        },

        sacar: function(valor) {
            if (valor <= this.saldo) {
                this.saldo -= valor
                console.log(`Com o saque de ${valor}, o novo saldo da conta ${numero} é: ${this.saldo}`)
            } else {
                console.log(`Saldo insuficiente para o saque de ${valor}. Saldo atual: ${this.saldo}`)
            }
        },
        
        juros: function(taxa) {
            const juros = this.saldo * taxa
            this.saldo -= juros
            console.log(`Com juros de ${juros}, o saldo final será de: ${this.saldo}`)
        },

        emprestimo: function(empres) {
            this.saldo += empres
            console.log(`Com o auxilio do emprestimo foi somado um valor de ${empres} somando ${this.saldo}`)
        },

        prestacao: function(pagar) {
            if (pagar > this.saldo) {
                console.log("A pessoa não possui dinheiro suficiente para pagar o emprestimo.")
            } else {
                this.saldo -= pagar
                console.log(`A pessoa pagou a prestação de ${pagar} e ficou com um total de ${this.saldo} na conta`)
            }
        }
    }
}