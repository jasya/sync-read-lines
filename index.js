/*
* @Author: jasya
* @Date:   2014-12-06 22:36:36
* @Last Modified by:   jasya
* @Last Modified time: 2014-12-08 10:56:38
*/

var fs = require('fs');


var Readlines = function(path){
    if(!path) return;
    this.Content = fs.readFileSync(path).toString().split(/\r\n|\n/ig);
    this.lines = 1;
    this.maxlines = this.Content.length;
}

Readlines.prototype.each = function(cb){
    var self = this;
    var len = this.Content.length;
    for(var i = 0 ;  i < len ; i++){
        cb(this.lines++,this.Content.shift())
    }
    this.complete();
}

Readlines.prototype.then = function(cb){
    if(this.lines == this.maxlines){
        this.complete();
        return;
    }
    else {
        cb(this.lines++,this.Content.shift());
        return this;
    }
}

Readlines.prototype.read = function(cb){
    if(this.lines == this.maxlines){
        this.complete();
        return;
    }
    else {
        cb(this.lines++,this.Content.shift());
        return this;
    }
}

Readlines.prototype.complete = function(cb){
    if(typeof cb !== 'function') return;
    if(--this.lines == this.maxlines){
        cb();
    }else{
        Readlines.prototype.complete = cb;
    }
}


exports = module.exports = Readlines;