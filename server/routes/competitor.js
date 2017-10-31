'use strict';

var express = require( 'express' )
var bodyParser = require( 'body-parser' )
var urlLib = require( 'url' )
var router = express.Router()
var jsonParser = bodyParser.json()
var Registration = require( '../models/registration' )
var Round = require( '../models/round' )


router.get( '/:id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    Registration.findById( req.params.id )
        .populate( 'category' )
        .populate( 'competition' )
        .populate( 'rounds' )     
        .exec(function( err, items ) {
            if ( err ) {
                res.send (JSON.stringify({
                    error : true,
                    message : err
                }))
                res.end()
            } else {
                res.send( JSON.stringify({
                    error : false,
                    data : items
                }))
                res.end()
            }
        });
})


/**
* Registration update pettition
**/
router.put( '/:id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : req.error
        }))
        res.end()
    }
    Registration.findByIdAndUpdate( req.params.id, req.body, function( err, item ) {
        if( err ) {
            res.send (JSON.stringify({
                error : true,
                message : err
            }))
            res.end()
        } else {
            res.send (JSON.stringify({
                error : false,
                data : item
            }))
            res.end()
        }
    });
});

router.delete( '/:id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : req.error
        }))
        res.end()
    }
    Registration.findByIdAndRemove( req.params.id, function( err ) {
        if( err ) {
            res.send (JSON.stringify({
                error : true,
                message : err
            }))
            res.end()
        } else {
            res.send (JSON.stringify({
                error : false,
                message : "ITEM DELETED"
            }))
            res.end()
        }
    });
});
module.exports = router;