window.onload = function () {
    const canvas = document.getElementById('tabuleiro');
    const ctx = canvas.getContext('2d');

    const tamanho = 50; // Cada quadrado = 50px
    const linhas = 8;
    const colunas = 8;

    for (let linha = 0; linha < linhas; linha++) {
        for (let coluna = 0; coluna < colunas; coluna++) {
            // Define a cor: alterna entre branco e preto
            ctx.fillStyle = (linha + coluna) % 2 === 0 ? '#ffffff' : '#000000';

            // Desenha o quadrado
            ctx.fillRect(coluna * tamanho, linha * tamanho, tamanho, tamanho);

            // Opcional: desenha a borda
            ctx.strokeStyle = '#888';
            ctx.strokeRect(coluna * tamanho, linha * tamanho, tamanho, tamanho);
        }
    }
};
