const btnStart = document.getElementById('btn-inicio');

const start = () => {
        $("#btn-inicio").hide(); //Comando jQuery que oculta a tag "inicio"

        //Cria divs dentro de "#fundoGame"
        $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
        $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
        $("#fundoGame").append("<div id='inimigo2></div>");
        $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
    } 

    btnStart.addEventListener('click', start); 

