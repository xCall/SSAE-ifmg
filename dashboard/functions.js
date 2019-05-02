$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('scrollNavbar');
        $('main').addClass('scrollMenuLateral');
    } else {
        $('nav').removeClass('scrollNavbar');
        $('main').removeClass('scrollMenuLateral');
    }
});
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
function abrirSlideMenu(){
    var menu = document.getElementById('menu');
    var content = document.getElementById('content');
    content.style.marginLeft = "0";
    menu.style.width = "200px";

}
function fecharSlideMenu(){
    var menu = document.getElementById('menu');
    var content = document.getElementById('content');
    
    menu.style.widht = "-200px";
    content.style.marginLeft = "-200px";
    content.style.left = "-200px";
    menu.style.transition = "0.7s";
}