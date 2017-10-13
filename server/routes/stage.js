'use strict';

var express = require( 'express' )
var bodyParser = require( 'body-parser' )
var urlLib = require( 'url' )
var router = express.Router()
var jsonParser = bodyParser.json()
var Stage = require( '../models/stage' )

/**
* stage list petttion
**/
router.get( '', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    Stage.find( function( err, items ) {
        if ( err ) {
            res.send( JSON.stringify({
                error : true,
                message : error
            }))
            res.end()
        } else {
            res.send( JSON.stringify({
                error : false,
                data : items
            }))
            res.end()
        }
    })
});

/**
* stage create pettition
**/
router.post( '', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    Stage.create( req.body, function( err, item ) {
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
* stage retrieve pettition by id
**/
router.get( '/:id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    Stage.findById( req.params.id, function( err, item ) {
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
* stage update pettition
**/
router.put( '/:id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    Stage.findByIdAndUpdate( req.params.id, req.body, function( err, item ) {
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
* stage delete pettition
**/
router.delete( '/:id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    Stage.findByIdAndRemove( req.params.id, function( err ) {
        if( err ) {
            res.send (JSON.stringify({
                error : true,
                message : error
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
