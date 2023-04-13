    // Classe abstrata: Carro
    class Carro {
        constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        }
    
        ligar() {
        throw new Error('ligar deve ser implementado!');
        }
    
        desligar() {
        throw new Error('desligar deve ser implementado!');
        }
    }
    
    // Classes herdeiras: CarroEsportivo e CarroFamiliar
    class CarroEsportivo extends Carro {
        constructor(marca, modelo, ano, potencia) {
        super(marca, modelo, ano);
        this.potencia = potencia;
        }
    
        ligar() {
        return 'Ligando o ' + this.modelo + ' com potência de ' + this.potencia + ' cavalos de potência.';
        }
    
        desligar() {
        return 'Desligando o ' + this.modelo + '.';
        }
    }
    
    class CarroFamiliar extends Carro {
        constructor(marca, modelo, ano, capacidade) {
        super(marca, modelo, ano);
        this.capacidade = capacidade;
        }
    
        ligar() {
        return 'Ligando o ' + this.modelo + ' com capacidade para ' + this.capacidade + ' passageiros.';
        }
    
        desligar() {
        return 'Desligando o ' + this.modelo + '.';
        }
    }
    
    // Criando instâncias 
    const carroEsportivo1 = new CarroEsportivo('Ferrari', '458 Italia', 2015, 562);
    const carroFamiliar1 = new CarroFamiliar('Chevrolet', 'Spin', 2018, 7);
    const carroEsportivo2 = new CarroEsportivo('Lamborghini', 'Huracan', 2019, 640);
    
    // Imprimindo as informações
    console.log(carroEsportivo1.ligar());
    console.log(carroFamiliar1.ligar());
    console.log(carroEsportivo2.ligar());
    console.log(carroFamiliar1.desligar());
    console.log(carroEsportivo1.desligar());
    console.log(carroEsportivo2.desligar());
    