$(document).ready(function ()
{
    enviar();
});

var dato;


function getQueryVariable() {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");       
            return query.toString().substring(pair[0].length + 1, query.length);
        
    }
    return false;
}
function enviar()
{ 
    dato=getQueryVariable();
    $.ajax({
        type: "GET",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        url: "http://localhost:3000/api/peliculas/",
        data: dato,
        success: function (response)
        {
            console.log(response);
            for(var i=0;i<response.length;i++)
            {
             if((dato-1)===i)
             {
            document.getElementById("video").src="../"+response[i].ruta;
            document.getElementById("imagenpelis").src="../"+response[i].rutaimagen;
            document.getElementById("titulo").innerHTML=response[i].titulo;
            document.getElementById("descrip").innerHTML=response[i].descripcion;
            document.getElementById("todolosgener").innerHTML=response[i].genero;
            document.getElementById("categoria").innerHTML=response[i].categoria;
             }
            }
        }
   
    });

}