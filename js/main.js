const btnStart = document.getElementById('btn-inicio');

const start = () => {
    $("#btn-inicio").hide(); //Comando jQuery que oculta a tag "inicio"

    //Cria divs dentro de "#fundoGame"
    $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
    $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //PRINCIPAIS VARIÁVEIS DO JOGO
    let jogo = {};
    let TECLA = {
        W: 87,
        S: 83,
        D: 68
    }
    jogo.pressionou = [];

    //Verifica se o usuário pressionou alguma tecla		
    $(document).keydown(function (e) {
        jogo.pressionou[e.which] = true;
    });
    $(document).keyup(function (e) {
        jogo.pressionou[e.which] = false;
    });

    //Game Loop - Chama a função loop a cada 30 milisegundos
    jogo.timer = setInterval(loop, 30);
    function loop() {
        movefundo();
        movejogador();
    }

    function movefundo() {
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position", esquerda - 1);
    }

    function movejogador() {
        if (jogo.pressionou[TECLA.W]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo - 10);
        }

        if (jogo.pressionou[TECLA.S]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo + 10);
        }

        if (jogo.pressionou[TECLA.D]) {
            //Chama função Disparo	
        }
    }
}
btnStart.addEventListener('click', start);

