//adiciona classes
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse, #sidebarCollapse-close').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
//função para mostrar em qual pagina você está
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