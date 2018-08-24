var Book = require('../../models/book');
var Avaliation = require('../../models/avaliation');

exports.getLivros = function(req, res){
    
  Book.find({}, function(err, result){
    if(err){ 
        res.json({
            success: false,
            message: 'ERROR_INESPECTED'
        });
    }else if(result != null){ 
        res.json({
            success: true,
            data: result
        });
    }else{
        res.json({
            success: false,
            message: 'NO_BOOK_FOUND'
        });
    }

  });
};


exports.getLivrosDetails = function(req, res){


    Avaliation.find({}).populate({path: 'bookID'}).exec(function(err, result){
        if(err){ 
            res.json({
                success: false,
                message: 'ERROR_INESPECTED'
            });
        }else if(result != null){ 
            res.json({
                success: true,
                data: result
            });
        }else{
            res.json({
                success: false,
                message: 'NO_BOOK_FOUND'
            });
        }
    });


};
