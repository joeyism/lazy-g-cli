var spawn = require('child_process').spawn;
var Promise = require('promise');

module.exports = function(command, params){

    command = (process.platform === 'win32') ? command + '.cmd' : command;

    var g = spawn(command, params, { stdio: 'inherit' });

    return new Promise(function(resolve){
    
        g.on('close', function(){
            resolve();
        });
    });
};
