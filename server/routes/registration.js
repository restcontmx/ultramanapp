'use strict';

var express = require( 'express' )
var bodyParser = require( 'body-parser' )
var urlLib = require( 'url' )
var router = express.Router()
var jsonParser = bodyParser.json()
var Registration = require( '../models/registration' )
var Round = require( '../models/round' )

router.get( '', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    Registration.find()
        .populate( 'category' )
        .populate( 'competition' )
        .populate( 'rounds' )     
        .exec(function( err, items ) {
            if ( err ) {
                res.send (JSON.stringify({
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
        });
})

// Add registration
router.post( '/', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    Registration.find( { competition : req.body.competition._id }, function( err, registrations ) {
        if( err ) {
            res.send( err )
            res.end()
        } else {
            req.body.competitor_number = registrations.length > 0 ? registrations[ registrations.length - 1 ].competitor_number + 1 : 1;
            req.body.sex = ( req.body.sex.value - 1 )
            let registration = new Registration( req.body )
            req.body.competition.stages.forEach( s => {
                for( let i = 0; i < s.rounds; i++ ) {
                    let temp_round = new Round( { stage : s } )
                    temp_round.save()
                    registration.rounds.push( temp_round )
                }
            });
            registration.save(function( err, item ) {
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
        }
    })
});

router.get( '/bycompetition/:id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    Registration.find( { competition : req.params.id } )    
        .populate( 'category' )
        .populate( 'competition' )
        .populate( 'rounds' )
        .exec( function( err, items ) {
            if ( err ) {
                res.send (JSON.stringify({
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
        });
});

router.put( '/rounds', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    } else {
        let registers = req.body
        registers.forEach( reg => {
            reg.rounds.forEach( r => {
                Round.findById( r._id, function( err, round ) {
                    if( err ) {
                        console.log( "There was an error finding round" )
                    } else {
                        round.time = r.time
                        round.save()
                    }
                })
            })
        })
        res.send( JSON.stringify({
            error : false,
            message : "Rounds updated"
        }))
        res.end()
    }
});

module.exports = router;