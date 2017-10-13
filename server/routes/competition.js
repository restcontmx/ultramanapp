'use strict';

var express = require( 'express' )
var bodyParser = require( 'body-parser' )
var urlLib = require( 'url' )
var router = express.Router()
var jsonParser = bodyParser.json()
var Competition = require( '../models/competition' )
var StageType = require( '../models/stage_type' )
var Stage = require( '../models/stage' )
var StartTime = require( '../models/start_time' )

/**
* competition list petttion
**/
router.get( '', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    Competition.find()
        .populate( 'stages' )
        .populate( 'competition_type' )
        .populate( 'start_times' )
        .exec( function( err, items ) {
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
* competition create pettition
**/
router.post( '', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    let competition = new Competition( req.body )
    switch( req.body.competition_type.value ) {
        case 1 : // Ultra man case
            // Create day 1
            let day1 = new StartTime( { name : 'Day 1' } )
            // Create day 2
            let day2 = new StartTime( { name : 'Day 2' } )
            // Create day 3
            let day3 = new StartTime( { name : 'Day 3' } )
            // save days
            day1.save()
            day2.save()
            day3.save()
            // add days
            competition.start_times.push( day1 )
            competition.start_times.push( day2 )
            competition.start_times.push( day3 )
            // Create stage 1 : swimming 12 rounds
            let nat = new Stage( { name : "Natación", rounds : 12, start_time : day1 } )
            // Create stage 2 : cycling day 1, 2 rounds
            let c1 = new Stage( { name : "Ciclismo parte 1", rounds : 2, start_time : day1 } )
            // Create stage 2 : cycling day 2, 2 rounds
            let c2 = new Stage( { name : "Ciclismo parte 2", rounds : 2, start_time : day2 } )
            // create stage 3 : running 2 rounds
            let run = new Stage( { name : "Carrera", rounds : 2, start_time : day3 } )
            nat.save()
            c1.save()
            c2.save()
            run.save()
            competition.stages.push( nat )
            competition.stages.push( c1 )
            competition.stages.push( c2 )
            competition.stages.push( run )
            break;
        case 2 : 
            // Case Maraton
            break;
        case 3 :
            // Case 5k
            break;
        case 4 :
            // Case 10k
            break;
        case 4 :
            // Case Maraton
            break;
    }
    competition.save( function( err, item ) {
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
* competition retrieve pettition by id
**/
router.get( '/:id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    Competition.findOne( { _id : req.params.id } )
                .populate( 'stages' )
                .populate( 'competition_type' )
                .populate( 'stages.start_time' )
                .populate( 'start_times' )
                .exec( function( err, item ) {
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
* competition update pettition
**/
router.put( ':id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    Competition.findByIdAndUpdate( req.params.id, req.body, function( err, item ) {
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
* competition delete pettition
**/
router.delete( '/:id', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    Competition.findByIdAndRemove( req.params.id, function( err ) {
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

/**
* competition update pettition
**/
router.put( '/starttimes', jsonParser, function( req, res ) {
    if( req.error ) {
        res.send (JSON.stringify({
            error : true,
            message : error
        }))
        res.end()
    }
    let competition = req.body
    competition.start_times.forEach( st => {
        console.log( st )
        StartTime.findByIdAndUpdate( st._id, { date : st.date, state : st.state }, function( err, start_time ) {
            if( !err ) {
                console.log( start_time )
            }
        })
    });
    Competition.findByIdAndUpdate( competition._id, competition, function( err, item ) {
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

module.exports = router;
