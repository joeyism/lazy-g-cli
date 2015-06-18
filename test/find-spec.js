var mockery = require('mockery');
var expect = require('chai').expect;
var find;

var makeFs = function(err, stat){
    return {
        stat: function(path, callback){
            callback(err, stat);
        }
    };
};

describe('find', function(){

    describe('g', function(){

        beforeEach(function(done){
            mockery.enable({
                warnOnReplace: false,
                warnOnUnregistered: false,
                useCleanCache: true
            });
            done();
        });

        afterEach(function(done){
            mockery.resetCache();
            mockery.deregisterAll();
            done();
        }); 

        it('should successfully find the Gruntfile', function(done){
            mockery.registerMock('fs', makeFs(null));
            find = require('../lib/find');
            find.g("path", "grunt").catch(function(command){
                expect(command).to.equal("grunt");
                done();
            });
        });

        it('should successfully find the gulpfile', function(done){
            mockery.registerMock('fs', makeFs(null));
            find = require('../lib/find');
            find.g("path", "gulp").catch(function(command){
                expect(command).to.equal("gulp");
                done();
            });
        });

        it('should not find the file and throw an ENOENT', function(done){
            mockery.registerMock('fs', makeFs({code:'ENOENT'}));
            find = require('../lib/find');
            find.g("path", "gulp").then(function(result){
                expect(result).to.be.undefined;
                done();
            });
        });

        it('should not find the file', function(done){
            mockery.registerMock('fs', makeFs('cant find'));
            find = require('../lib/find');
            find.g("path", "gulp").then(function(result){
                expect(result).to.be.undefined;
                done();
            });
        });
    });

    describe('type', function(){
    
        beforeEach(function(done){
            mockery.enable({
                warnOnReplace: false,
                warnOnUnregistered: false,
                useCleanCache: true
            });
            done();
        });

        afterEach(function(done){
            mockery.resetCache();
            mockery.deregisterAll();
            done();
        }); 

        it('should successfully find the Grunt file', function(){
            mockery.registerMock('fs', makeFs(null));
            find = require('../lib/find');
            find.type().then(function(command){
                expect(command).to.equal("grunt");
                done();
            });
        });
    
        it('should throw an error when it finds neither of the files', function(){
            mockery.registerMock('fs', makeFs('error'));
            find = require('../lib/find');
            find.type().catch(function(error){
                expect(error).to.equal("Neither gulpfile nor Gruntfile could be found");
                done();
            });
        });
    
    });
});
