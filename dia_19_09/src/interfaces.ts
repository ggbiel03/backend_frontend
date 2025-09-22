let pessoa: object = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
};

pessoa =  {
    nome: "Maria",
    idade: 25,
    profissao: "Designer",
    id: 123
}

interface Pessoa {
    nome: string;
    idade?: number;
    profissao: string;
}

const pessoa1: Pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
    
};
