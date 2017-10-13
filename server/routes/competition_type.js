'use strict';

var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var urlLib = require( 'url' );
var router = express.Router();
var jsonParser = bodyParser.json();
var CompetitionType = require( '../models/competition_type' );

/**
* competition type list petttion
**/
router.get( '/', jsonParser, function( req, res ) {

    if( req.error ) {
        res.send(JSON.stringify({
            error : true,
            message : err
        }))
        res.end()
    }
    
    CompetitionType.find(function( err, items ) {
        if ( err ) {
            res.send(JSON.stringify({
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
    
});

/**
* CompetitionType retrieve pettition by id
**/
router.get( '/:id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    CompetitionType.findById( req.params.id, function( err, item ) {
        if( err ) {
            res.send (JSON.stringify({
                error : true,
                message : error
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

/**
* CompetitionType create pettition
**/
router.post( '', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    CompetitionType.create( req.body, function( err, item ) {
        if( err ) {
            res.send (JSON.stringify({
                error : true,
                message : error
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

/**
* CompetitionType update pettition
**/
router.put( '/:id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    CompetitionType.findByIdAndUpdate( req.params.id, req.body, function( err, item ) {
        if( err ) {
            res.send (JSON.stringify({
                error : true,
                message : error
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

/*
* Copmpetition type delete pettition
*/
router.delete( '/:id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.sendStatus( 400 )
        res.send( req.error )
        res.end()
    }
    CompetitionType.findOneAndRemove( { id : req.params.id }, function( err ) {
        if( err ) {
            console.log( "There was an error deleting the competition type" )
        }
        res.send( "Deleted." )
        res.end()
    })

});

module.exports = router;