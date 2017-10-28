'use strict';

var express = require( 'express' )
var bodyParser = require( 'body-parser' )
var urlLib = require( 'url' )
var router = express.Router()
var jsonParser = bodyParser.json()
var request = require( 'request' )

// Add registration
router.post( '/login', jsonParser, function( req, res ) {
    if( req.body.email == 'restcontmx@gmail.com' && req.body.password == "123456" ) {
        require('getmac').getMac(function(err,macAddress){
            if (err)  throw err
            console.log(macAddress)
        })
        res.send(JSON.stringify({
            error : false,
            data : {
                username : "restcontmx",
                email : "restcontmx@gmail.com",
                first_name : "Ramiro",
                last_name : "Gutierrez Alaniz"
            }
        }))
        res.end()
    } else {
        res.send( JSON.stringify({
            error : true,
            message : "Invalid Credentials"
        }))
        res.end()
    }
});

module.exports = router;