window.onload = function(){
    var modalRegistro = new bootstrap.Modal(document.getElementById("modalRegistro"),{});
    modalRegistro.show();
    document.getElementById("registro").onclick = function(){
        modalRegistro.show();
    }
/*
    var modalCookies = new bootstrap.Modal(document.getElementById("modalCookies"),{});
    modalCookies.show();
*/

}