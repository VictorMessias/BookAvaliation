var Avaliation = require('../../models/avaliation');

exports.addAvaliation = function(req, res){

    var livroID = req.body.livroID;
    var nota = req.body.nota;
    var estado = req.body.estado;
    var obs = req.body.obs;
    
  Avaliation.create({livroID: livroID, estado: estado, nota: nota, obs: obs}, function(err, result){
    console.log(result);
    if(err){ 
        res.json({
            success: false,
            message: 'ERROR_INESPECTED'
        });
    }else{ 
        res.json({
            success: true
        });
    }

  });
};
