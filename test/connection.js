const mongoose = require('mongoose');


// Connecto to the db before test run - mocha hook
before(function(done){
    // Connect to mongodb
    const uri = 'mongodb://localhost/testaroo';
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error){
        console.log('Connection error:', error);
    });    
});

beforeEach(function(done){
    // Drop each collection 
    // everytime we run a test is created a record
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    })
})
