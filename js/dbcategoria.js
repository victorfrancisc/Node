var config = require('./disconfig');// para distanciar el archivo
const sql = require('mssql');// se necesita paquete de sql


async function getpeliculas()
{
    try
    {
 
        let pool= await sql.connect(config);
        let pelis= await pool.request().query("select * from pelicula");
        
        return pelis.recordset;

    }catch(error){console.log(error);}
}

async function getpeliculas_id(id_parametro)
{
    try
    {
        console.log(id_parametro);
        let pool= await sql.connect(config);
        let id_pelis=await pool.request()
        .input('input_parameter',sql.Int, id_parametro)
        .query("select * from pelicula where idpelicula=@input_parameter");
        return id_pelis.recordset;

    }catch(error){console.log(error);}
}




module.exports={getpeliculas : getpeliculas,
     getpeliculas_id: getpeliculas_id}
