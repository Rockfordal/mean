var express = require('express'),
    stylus = require('stylus'),
    doT = require('express-dot'),
    fs = require('fs');

module.exports = function(app, config){
    function compile(str, path){
        return stylus(str).set('filename', path);
    }

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

    doT.setGlobals({
      loadfile: function(path){
        var url = config.rootPath + path;
        return fs.readFileSync(url, 'utf8');}
    });

  app.configure(function(){
        app.set('views', config.rootPath + '/server/views');
        app.set('view engine', 'dot' );
        app.engine('html', doT.__express );
        app.engine('ejs', doT.__express );
        app.use(express.bodyParser());
        app.use(stylus.middleware({
                src: config.rootPath + '/public',
                compile: compile
            }
        ));
        app.use(express.static(config.rootPath + '/public'));
    });
}
