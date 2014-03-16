var express = require('express'),
    stylus = require('stylus'),
    doT = require('express-dot'),
    mongoose = require('mongoose'),
    fs = require('fs');
//var env = process.env.NODE_ENV || 'development';
var app = express();

function compile(str, path){
    return stylus(str).set('filename', path);
}

doT.setGlobals({
    loadfile: function(path){return fs.readFileSync(__dirname + path, 'utf8');}
});

doT.setTemplateSettings({
    evaluate:    /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    encode:      /<%!([\s\S]+?)%>/g,
    use:         /<%#([\s\S]+?)%>/g,
    define:      /<%##\s*([\w\.$]+)\s*(:|=)([\s\S]+?)#%>/g,
    conditional: /<%\?(\?)?\s*([\s\S]*?)\s*%>/g,
    iterate:     /<%~\s*(?:\}\}|([\s\S]+?)\s*:\s*([\w$]+)\s*(?::\s*([\w$]+))?\s*%>)/g,
    varname: 'it',
    strip: true,
    append: true,
    selfcontained: false
});

app.configure(function(){
    app.set('views', __dirname + '/server/views');
    app.set('view engine', 'dot' );
    app.engine('html', doT.__express );
    app.engine('ejs', doT.__express );
    app.use(express.bodyParser());
    app.use(stylus.middleware({
            src: __dirname + '/public',
            compile: compile
        }
    ));
    app.use(express.static(__dirname + '/public'));
});

mongoose.connect('mongodb://localhost/multivision');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('multivision db opened');
});

//var messageSchema = mongoose.Schema({message: String});
//var Message = mongoose.model('Message', messageSchema);
//var mongoMessage;
//Message.findOne().exec(function(err, messageDoc) {
//    mongoMessage = messageDoc.message;
//});

app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params);
});

app.get('*', function(req, res) {
    res.render('index.ejs');
    //{ mongoMessage: mongoMessage }
});

var port = 3000;
app.listen(port);
console.log('Lyssnar på port ' + port + '...');
