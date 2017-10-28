var express       = require( 'express' ),
    path          = require( 'path' ),
    favicon       = require( 'serve-favicon' ),
    logger        = require( 'morgan' ),
    cookieParser  = require( 'cookie-parser' ),
    bodyParser    = require( 'body-parser' ),
    path          = require( 'path' ),
    http          = require( 'http' ),
    api           = express(),
    mongoose      = require('mongoose');

const competition = require( './server/routes/competition' )
const category = require( './server/routes/category' )
const registration = require( './server/routes/registration' )
const competition_type = require( './server/routes/competition_type' )
const stage = require( './server/routes/stage' )
const stage_type = require( './server/routes/stage_type' )
const round = require( './server/routes/round' )
const start_time = require( './server/routes/start_time' )
const auth = require( './server/routes/auth' )

mongoose.connect('mongodb://localhost:27017/ultraman');

api.use( bodyParser.json() );
api.use( bodyParser.urlencoded( { extended: false } ) );
api.use( cookieParser() );

api.use( express.static( path.join(__dirname, 'dist_angular') ) );

api.use( '/api/competition/', competition )
api.use( '/api/competition_type/', competition_type )
api.use( '/api/category/', category )
api.use( '/api/registration/', registration )
api.use( '/api/stage/', stage )
api.use( '/api/stage_type/', stage_type )
api.use( '/api/round/', round )
api.use( '/api/start_time/', start_time )
api.use( '/api/auth/', auth )

api.get( '*', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'dist_angular/index.html' ) );
});

const port = process.env.PORT || '3456';
api.set( 'port', port );

const server = http.createServer(api);
server.listen( port, () => console.log( `Running on localhost:${port}` ) );

const electron      = require( 'electron' )
const app           = electron.app
const BrowserWindow = electron.BrowserWindow
const url           = require( 'url' )

let mainWindow

function createWindow () {

    mainWindow = new BrowserWindow( { fullscreen : true } )
    mainWindow.loadURL( 'http://localhost:3456' )
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
    mainWindow.on( 'closed', function () {
        mainWindow = null
    })
}

app.on( 'ready', createWindow )

app.on( 'window-all-closed', function () {
    if ( process.platform !== 'darwin' ) {
        app.quit()
    }
})

app.on( 'activate', function () {
    if ( mainWindow === null ) {
        createWindow()
    }
})


