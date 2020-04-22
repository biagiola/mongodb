const assert = require('assert');
const MarioChar = require('../models/marioChar');

// Describe tests
describe('saving records', function(){
    
    // Create tests
    it('Saves a record to the database', function(done){
        var char = new MarioChar({
            name: 'Mario'
        });

        // as save is async, we use a promise
        char.save().then(function(){
            assert(char.isNew === false);  // is false after create the variable and save it to db
            done(); // mocha
        });
    });

    // next test

});