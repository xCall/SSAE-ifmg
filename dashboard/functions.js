//Variaveis globais
var $element = $('main');
//adiciona classe de acordo com o tamanho da tela de usuario
$(window).resize(function(){
    if (window.innerWidth < 768) {
        $element.addClass("navbar-inverse");
    /* Acima de 768px, se existir a classe navbar-inverse ela é retirada*/
    } else {
        $element.removeClass("navbar-inverse");
    }
}).trigger("resize");
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
    menu.style.widht = "-100%";
    content.style.marginLeft = "-100%";
    content.style.left = "-100%";
    menu.style.transition = "0.50s";
}