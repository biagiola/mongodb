const mongoose = require('mongoose');

// Connecto to the db before test run
before(function(done){
    // Connect to mongodb
    const uri = 'mongodb://localhost/testaroo';
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error){
        console.log('Connection error:', error);
    });    
});

