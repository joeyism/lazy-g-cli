var spawn = require('child_process').spawn;
var Promise = require('promise');

module.exports = function(command, params){

    command = (process.platform === 'win32') ? command + '.cmd' : command;

    var g = spawn(command, params);

    return new Promise(function(resolve){
        
        g.stdout.on('data', function(data){
            console.log(data.toString());
        });    

        g.stderr.on('data', function(data){
            console.log(data.toString());
        });
    
        g.on('close', function(){
            resolve();
        });
    });
};
