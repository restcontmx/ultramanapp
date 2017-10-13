const   Mongod        = require( 'mongod' ),
        mongo_server  = new Mongod( 27017 );

mongo_server.open( ( err ) => {
    if ( err === null ) {
        console.log( "MongoDB server running at 27017" );
    }
});
