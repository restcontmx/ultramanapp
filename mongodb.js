const   Mongod          = require( 'mongod' )
const   mongo_server    = new Mongod({
    port: 27017,
    bin: '/Program Files/MongoDB/Server/3.4/bin/mongod'
})
          
mongo_server.open( ( err ) => {
    if ( err != null ) {
        throw err
    }
});
