
document.addEventListener("DOMContentLoaded", function () {

    const header = `
        <header>
            <nav>
                <div class="logo">
                    GO UP
                </div>

                <ul>
                    <li><a href="/index.html">Início</a></li>
                    <li><a href="/pages/sobre.html">Sobre</a></li>
                    <li><a href="/pages/servicos.html">Serviços</a></li>
                    <li><a href="/pages/portfolio.html">Portfólio</a></li>
                    <li><a href="/pages/orcamento.html">Orçamento</a></li>
                    <li><a href="/pages/contato.html">Contato</a></li>
                </ul>
            </nav>
        </header>
    `;

    const container = document.querySelector("#global-header");

    if (container) {
        container.innerHTML = header;
    }

});
