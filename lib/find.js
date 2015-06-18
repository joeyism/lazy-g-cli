'use strict';
var Promise = require('promise');
var path = require('path');
var fs = require('fs');

var find = module.exports;

find.g = function(cwd, g){
    var file;
    if (g === 'grunt'){
        file = 'Gruntfile.js';
    }
    else if (g === 'gulp') {
        file = 'gulpfile.js';
    }   
    return new Promise(function(resolve, reject){
        fs.stat(path.join(cwd, file), function(err, stat) {
            if(err == null) {
                reject(g);
            } else if(err.code == 'ENOENT') {
                resolve();
            } else {
                resolve();
            }
        });
    });
};


find.type = function(){

    return new Promise(function(resolve, reject){

        var cwd = process.cwd();

        find.g(cwd, 'grunt').then(function(){

            return find.g(cwd, 'gulp');

        }).then(function(){

            reject('Neither gulpfile nor Gruntfile could be found'); 

        }).catch(function(command){

            resolve(command);

        });
    });
};
