const dbcategoria= require('./js/dbcategoria');

var express= require('express');
var bodyParser= require('body-parser');
var cors= require('cors');



var app=express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router); 


router.route('/peliculas').get((request, response)=>{
    dbcategoria.getpeliculas().then(result =>{
        response.json(result);
    })
})

router.route('/peliculas/:id').get((request, response)=>{
    dbcategoria.getpeliculas_id(request.params.id).then(result =>{
        response.json(result);
    })
})




var port =process.env.PORT || 3000;
app.listen(port);
console.log('prepadado:'+port);

