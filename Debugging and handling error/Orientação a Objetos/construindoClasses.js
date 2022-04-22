/*Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando
a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.*/

class ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = saldo;
  }
  get saldo(){
    return this._saldo
  }
  set saldo(valor){
    this._saldo = valor
  }

  sacar(valor) {
    if(valor > this._saldo){
      return "Operação negada"
    }
    this.saldo = this.saldo - valor
    return `Você sacou R$ ${valor}. Saldo atual R$ ${this.saldo}`
  }
  depositar(valor) {
     this.saldo = this.saldo + valor
     return `Você depositou R$ ${valor}. Saldo atual R$ ${this.saldo}`
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, saldo ,cartaoDeCredito) {
    super(agencia, numero, saldo)
    this._cartaoDeCredito = cartaoDeCredito;
    this.tipo = 'Corrente'
  }
  get cartaoDeCredito(){
    return this._cartaoDeCredito
  }
  set cartaoDeCredito(valor){
    return this._cartaoDeCredito = valor
  }


}
class ContaPoupanca extends ContaBancaria {
construtor(agencia, numero, saldo) {
  super(agencia, numero, saldo)
  this.tipo = "Poupança"
}
}
class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero, saldo){
  super(agencia, numero, saldo)
  this.tipo = "universitária"
  }
  sacar(valor) {
    super.sacar();
    try {
      if (valor >= 500)
        throw new RangeError("Saque acima do valor permitido");
      return valor
    }
    catch (e) {
      if (e instanceof RangeError) {
        console.log("Limite indiponível para essa conta")
      }
    }
  }
}

let itau = new ContaBancaria(0935,747 +" - "+ 6,'conta-corrente',1000)
let bradesco = new ContaCorrente()