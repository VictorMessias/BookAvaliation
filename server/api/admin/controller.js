var Avaliation = require('../../models/avaliation');
var User = require('../../models/user');
var Book = require('../../models/book');
var mongoose = require('mongoose');

exports.addAvaliation = function(req, res){

    var username = req.body.username;
    var bookID = req.body.bookID;
    var nota = req.body.nota;
    var estado = req.body.estado;
    var obs = req.body.obs;

    User.findOne({username: username, avaliations: {$elemMatch: {bookID: bookID}}}, function(err, result){
        if(err){ 
            res.json({
                success: false,
                message: 'ERROR_INESPECTED'
            });
        }else if(result == null){ 

            Avaliation.findOneAndUpdate({_id: mongoose.Types.ObjectId()}, {bookID: bookID, estado: estado, nota: nota, obs: obs}, {new: true, upsert: true},
             function(err, avaliation){
                if(err){ 
                    res.json({
                        success: false,
                        message: 'ERROR_INESPECTED'
                    });
                }else{ 
                    
                    User.update({username: username}, {$push: {avaliations: {avaliationID: avaliation._id, bookID: bookID}}},
                         function(err, result){
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

                }
              });

        }else{
            res.json({
                success: false,
                message: 'AVALIATION_ALREADY_MADE'
            });
        }

    })
    
  
};


exports.login = function(req, res){

    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username, password: password, admin: true}, function(err, result){
        if(err){
            res.json({
                success: false,
                message: 'ERROR_INESPECTED'
            });
        }else if(result != null){
            res.json({
                success: true
            })
        }else{
            res.json({
                success: false,
                message: 'NO_USER_FOUND_OR_WRONG_PASSWORD'
            });
        }
    });

};


exports.getAvaliations = function(req, res){

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
                message: 'NO_AVALIATION'
            });
        }
    });

};


exports.addUser = function(req, res){

    var name = req.body.name;
    var username = req.body.username;
    var admin = req.body.admin;
    var password = req.body.password;

    User.create({name: name, username: username, admin: admin, password: password}, function(err, result){
        if(err){
            if(err.code === 11000){
                res.json({
                    success: false,
                    message: 'USER_ALREADY_EXISTS'
                });
            }else{
                res.json({
                    success: false,
                    message: 'ERROR_INESPECTED'
                });
            }
        }else{
            res.json({
                success: true
            });
        }

    });
};

exports.addBook = function(req, res){

    var name = req.body.name;
    var author = req.body.author;

    Book.create({name: name, author: author}, function(err, result){
        if(err){
            if(err.code === 11000){
                res.json({
                    success: false,
                    message: 'BOOK_ALREADY_EXISTS'
                });
            }else{
                res.json({
                    success: false,
                    message: 'ERROR_INESPECTED'
                });
            }
        }else{
            res.json({
                success: true
            });
        }

    });
};

