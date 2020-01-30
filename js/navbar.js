$(document).ready(() => {
    var navbar = $('#navbar');
    navbar.html(`<div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="pie-1.html">HOME<span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Abrir
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="pie-1.html">Pizza 01</a>
                    <a class="dropdown-item" href="evolucao-rentabilidade.html">Evolução Rentabilidade</a>
                    <a class="dropdown-item" href="evolucao-rentabilidade2.html">Evolução Rentabilidade 2</a>
                    <a class="dropdown-item" href="grafico-negativo.html">Negativo</a>
                    <a class="dropdown-item" href="grafico-negativo-linhas.html">Negativo Linhas</a>
                    <a class="dropdown-item" href="barras-horizontal.html">Barras Horizontal</a>
                </div>
            </li>
        </ul>
    </div>`)
})
