'use strict';

var express = require( 'express' )
var bodyParser = require( 'body-parser' )
var urlLib = require( 'url' )
var router = express.Router()
var jsonParser = bodyParser.json()
var StageType = require( '../models/stage_type' )

/**
* stage_type list petttion
**/
router.get( '', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    StageType.find( function( err, items ) {
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
* stage_type create pettition
**/
router.post( '', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    StageType.create( req.body, function( err, item ) {
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
* stage_type retrieve pettition by id
**/
router.get( '/:id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    StageType.findById( req.params.id, function( err, item ) {
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
* stage_type update pettition
**/
router.put( '/:id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    StageType.findByIdAndUpdate( req.params.id, req.body, function( err, item ) {
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
* stage_type delete pettition
**/
router.delete( '/:id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    StageType.findByIdAndRemove( req.params.id, function( err ) {
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
