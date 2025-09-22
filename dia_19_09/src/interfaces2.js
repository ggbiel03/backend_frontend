function mostrarLoja(lj) {
    console.log("Loja: ".concat(lj.nome, ", Endere\u00E7o: ").concat(lj.endereco, ", Status: ").concat(lj.status ? "Aberta" : "Fechada"));
}
mostrarLoja({
    nome: "Loja A",
    endereco: "Rua 123",
    status: true
});
