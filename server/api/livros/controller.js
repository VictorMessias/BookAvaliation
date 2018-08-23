var Book = require('../../models/book');

exports.getLivros = function(req, res){
    
  Book.find({}, function(err, result){
    console.log(result);
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
