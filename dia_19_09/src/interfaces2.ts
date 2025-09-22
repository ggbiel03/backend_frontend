interface Loja {
    nome: string;
    endereco: string;
    status: boolean;
}

function mostrarLoja(lj: Loja): void {
    console.log(`Loja: ${lj.nome}, Endereço: ${lj.endereco}, Status: ${lj.status ? "Aberta" : "Fechada"}`);
}

mostrarLoja({
    nome: "Loja A",
    endereco: "Rua 123",
    status: true
});
