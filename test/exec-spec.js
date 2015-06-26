'use strict';
var mockery = require('mockery');
var expect = require('chai').expect;
var exec;

var createFakeChild = function(commandExpectation){
    return {
        spawn: function(command, params, options){
            expect(command).to.equal(commandExpectation);
            return {
                on: function(command, callback){
                    callback();
                }
            };
        }
    };
}

describe('exec', function(){

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

    it('should successfully run grunt command that was passed to it', function(done){
        mockery.registerMock('child_process',createFakeChild('grunt'));
        exec = require('../lib/exec');
        exec('grunt', []).then(function(output){
            expect(output).to.be.undefined;
            done();
        });
    });

    it('should successfully run gulp command that was passed to it', function(done){
        mockery.registerMock('child_process',createFakeChild('gulp'));
        exec = require('../lib/exec');
        exec('gulp', []).then(function(output){
            expect(output).to.be.undefined;
            done();
        });
    });
});
