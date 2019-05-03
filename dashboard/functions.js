/*
    Versao: 0.1.0
    Ultima atualizacao: 02/05/2019
    Criado por: carlosfaita99@gmail.com
    modificado em:                  por:
    modificacoes realizadas: 
    ***NAO ESQUECA DE FAZER COMENTARIOS***
*/

//Funcao para adicionar e remover classes
//de acordo coom o scrool da pagina usando o JQUERY
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('scrollNavbar');
        $('main').addClass('scrollMenuLateral');
    } else {
        $('nav').removeClass('scrollNavbar');
        $('main').removeClass('scrollMenuLateral');
    }
});
//Funcao para mostrar no NavBar em qual 
//local da pagina a pessoa esta localizada
function mostrarAtivo(tag){
    var tag_li = document.getElementById('lista-menu');
    var tag_a = tag_li.getElementsByTagName('a');
    for (i=0; i<tag_a.length; i++ ){
        tag_a[i].style.color = "";
        tag_a[i].style.background = "";
        tag_a[i].style.boxShadow = "";
        tag_a[i].style.borderLeft = "";
    }
    tag.style.color = "red";
    tag.style.background = "#fff";
    tag.style.boxShadow = "0 2px 3px #777";
    tag.style.borderLeft = "9px solid red";
}
//Funcao usada para abrir a Navbar
function abrirSlideMenu(){
    var menu = document.getElementById('menu');
    var content = document.getElementById('content');
    content.style.marginLeft = "0";
    menu.style.width = "200px";
}
//Funcao usada para fechar a Navbar
function fecharSlideMenu(){
    var menu = document.getElementById('menu');
    var content = document.getElementById('content');
    menu.style.widht = "-200px";
    content.style.marginLeft = "-200px";
    content.style.left = "-200px";
    menu.style.transition = "0.7s";
}