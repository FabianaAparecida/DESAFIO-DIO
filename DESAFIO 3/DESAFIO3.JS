// Definição da classe Heroi
class Heroi {
    // Construtor da classe com propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque = '';
  
      // Determina o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'atacou';
      }
  
      // Exibe a mensagem de ataque
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplos de uso
  const mago = new Heroi('Merlin', 100, 'mago');
  const guerreiro = new Heroi('Arthur', 30, 'guerreiro');
  const monge = new Heroi('Lee', 40, 'monge');
  const ninja = new Heroi('Hanzo', 25, 'ninja');
  
  // Realiza os ataques
  mago.atacar();       // Saída: o mago atacou usando magia
  guerreiro.atacar();  // Saída: o guerreiro atacou usando espada
  monge.atacar();      // Saída: o monge atacou usando artes marciais
  ninja.atacar();      // Saída: o ninja atacou usando shuriken
  