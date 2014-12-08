#sync-read-lines

    npm install read-lines

##Usage

    var Readlines = require('sync-read-lines');
    var readlines = new Readlines('/Users/jasya/project/npm/sync-read-lines/index.js');
    readlines.complete(function(){
        console.log('finish')
    });
    readlines.read(function(index,data){
        //read first line
    }).then(function(index,data){
        //get the next line
    }).then(function(index,data){
        //get the next line
    });
    readlines.each(function(index,data){
        console.log(index,data);
    });