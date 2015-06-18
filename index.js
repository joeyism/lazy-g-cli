#!/usr/bin/env node
'use strict';
var find = require('./lib/find');
var exec = require('./lib/exec');
require('colors');

var params = process.argv;
params.splice(0,2);

find.type().then(function(command){
    
    return exec(command, params);

}).catch(function(err){

    console.log(err.toString().red);

})
