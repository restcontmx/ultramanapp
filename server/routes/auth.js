'use strict';

var express = require( 'express' )
var bodyParser = require( 'body-parser' )
var urlLib = require( 'url' )
var router = express.Router()
var jsonParser = bodyParser.json()
var request = require( 'request' )
var Setup = require( '../models/setup' )
var CompetitionType = require( '../models/competition_type' )

var g_opts = {
    hostname : 'balpres-be-gunt2raro.c9users.io',
    api_uri : 'https://racecontrolapi-gunt2raro.c9users.io/api/',
    port : '8080',
    token : 'UkFDRUFQUDpCPCUhL341eW1aQ0Jrejdl'
};

// Add registration
router.post( '/login', jsonParser, function( req, res ) {
    Setup.findOne( { email : req.body.email, password : req.body.password }, function( err, setup ) {
        if( err ) {
            res.send( JSON.stringify({
                error : true,
                message : "Invalid Credentials"
            }))
            res.end()
        } else if( setup ) {
            res.send(JSON.stringify({
                error : false,
                data : setup
            }))
            res.end()
        } else {
            res.send( JSON.stringify({
                error : true,
                message : "Invalid Credentials"
            }))
            res.end()
        }
    })
});

router.get( '/issetted', jsonParser, function( req, res ) {
    Setup.find( function( err, setups ) {
        if( err ) {
            res.send( JSON.stringify({
                error : true,
                valid : false
            }))
            res.end()
        } else {
            if( setups.length == 0 ) {
                res.send( JSON.stringify({
                    error : false,
                    valid : false
                }))
                res.end()
            } else {
                res.send( JSON.stringify({
                    error : false,
                    valid : setups[0].valid
                }))
                res.end()
            }
        }
    })
});

router.post( '/register', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    require('getmac').getMac(function(err,macAddress){
        if (err)  throw err
        console.log(macAddress)
        req.body.mac_add = macAddress
        request(
            {
                url : g_opts.api_uri + 'user/',
                method : 'POST',
                json : true,
                body : req.body,
                headers : {
                    'Authorization' : 'Basic ' + g_opts.token 
                }
            },
            ( error, response, body ) => {
                if( response ) {
                    switch (response.statusCode) {
                        case 200 :
                            let ss = Setup({
                                key : req.body.key,
                                username : req.body.user.username,
                                email : req.body.user.email,
                                password : req.body.user.password,
                                first_name : req.body.user.first_name,
                                last_name : req.body.user.last_name,
                                valid : true
                            })
                            ss.save()  
                            let u1 = CompetitionType({
                                name : 'Ultraman',
                                distance : 515,
                                value : 1
                            })
                            u1.save()                          
                            res.send(JSON.stringify({
                                error : false,
                                code : 200,
                                message : body.message,
                                data : ss
                            }));
                            res.end();
                            break;                                   
                        case 201 :
                            let ss2 = Setup({
                                key : req.body.key,
                                username : req.body.user.username,
                                email : req.body.user.email,
                                password : req.body.user.password,
                                first_name : req.body.user.first_name,
                                last_name : req.body.user.last_name,
                                valid : true
                            })
                            ss2.save()
                            let u2 = CompetitionType({
                                name : 'Ultraman',
                                distance : 515,
                                value : 1
                            })
                            u2.save()
                            res.send(JSON.stringify({
                                error : false,
                                code : 201,
                                data : ss2
                            }));
                            res.end();
                            break;
                        case 400 :
                            res.send(JSON.stringify({
                                error : true,
                                code : 400,
                                message : body.message
                            }));
                            res.end(); 
                            break;       
                        default:
                            res.send( error );
                            res.end();
                            break;        
                    }
                } else {
                    res.send( error );
                    res.end();
                }
            }
        );
    })
});

module.exports = router;