var User = require('../../models/user');

exports.login = function(req, res){

  var username = req.body.username;

  console.log(req.body);

  User.findOne({username: username}, function(err, result){
    if(err){ 
        res.json({
            success: false,
            message: 'ERROR_INESPECTED'
        });
    }else if(result != null){ 
        res.json({
            success: true
        });
    }else{
        res.json({
            success: false,
            message: 'NO_USER_FOUND'
        });
    }

  });
};
