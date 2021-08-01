
$(document).ready(function ()
{
 $("#llamar").click(function(){todalasPeliculas();});
 $("#uno").click(function(){pelicula_id("1")});
 $("#dos").click(function(){pelicula_id("2")});
 $("#animes").click(function(){cmabiardiv("anime");})
 $("#estreno").click(function(){cmabiardiv("sinestreno");})
});


var vector=["sinestreno","anime"]


function pelicula_id(id)
{
    window.location.href = "./paginas/videos.html?id=" + id;

}

function cmabiardiv(id)
{
    for(var i=0;i<vector.length;i++)
    {
        if(id==vector[i])
        {
            document.getElementById(id).style.display="block";
        }else{
            document.getElementById(vector[i]).style.display="none";
        }
    }

}

function todalasPeliculas()
{
    $.ajax({
        type: "GET",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        url: "http://localhost:3000/api/peliculas",
        data: "",
        success: function (response)
        {
            console.log(response);
        }
   
    });

}