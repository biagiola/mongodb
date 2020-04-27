const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

// Describe our tests
describe('Nesting records', function(){

    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
            done();
        });
    });

    // Create tests
    it('Creates an author with sub.documents', function(done){

        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{ title: 'Name of the wind', pages: 400 }]
        });

        pat.save().then(function(){
            Author.findOne({ name: 'Patrick Rothfuss'}).then(function(record){
                assert(record.books.length === 1);
                done();
            });
        });
    });

    // Another test to add more books 
    it('Adds a book to an author', function(done){
        
        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the wind', pages: 400 }]
        });

        pat.save().then(function(){

            Author.findOne({ name: 'Patrick Rothfuss'}).then(function(record){
                // add a book to the books array
                record.books.push({title: "Wise man's fear", pages: 500});
                record.save().then(function(){

                    Author.findOne({ name: 'Patrich Rothfuss' }).then(function(result){
                        assert(record.books.length === 2);
                        done();
                    });
                });
            });
        });
    });
});