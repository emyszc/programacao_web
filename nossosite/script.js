// Seleciona elementos
const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const saida = document.getElementById("saida");
const titulo = document.querySelector("h1");
const descricao = document.getElementById("descricao");
// Evento de clique no botão (submit do form)
form.addEventListener("submit", function(event) {
    event.preventDefault(); // impede recarregar a página
    const nome = input.value; // captura o texto digitado
    // Exibe mensagem personalizada
    saida.textContent = `Olá, ${nome}! É um prazer receber você no Studio Versátil Beauty.`;
    // Altera dinamicamente o conteúdo da página
    titulo.textContent = `Bem-vindo(a), ${nome}! ✨`;
    descricao.textContent = `Olá ${nome}, aqui você encontra maquiagem, cabelo, unhas, design de sobrancelhas e epilação em um ambiente moderno e confortável.`;
    input.value = ""; // limpa o campo
});
