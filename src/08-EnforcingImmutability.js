//Enforcing Immutability

//There are several libraries to force Immutability in javascript
//this due to javascript is not a language with pure programming and is not Immutable

//Libraries
//Immutable -- referrence: https://immutable-js.com/
//Immer -- reference: https://immerjs.github.io/immer/
//Mori -- reference: https://swannodette.github.io/mori/


//Working with Immutable library

    //1. Mutable code
    //Object

    import { Map } from 'immutable';

    let book = { title: "Harry Potter"};

    //Function that is making mutable for the passed object
    function publish(book){
        book.isPublished = true;
    }

    publish(book);

    console.log(book);

    //2. Making above code Immutable
    //install "Immutable" library with npm package: npm i immutable
    //With this we cannot modify or access directly to properties into book object, is immutable now.
    let bookImmutable = Map({ title: "Harry Potter"});

    //to access object values we need to call "get" method
    //this will return property value
    console.log(bookImmutable.get("title"));

    //to add some property to object we can do the next thing
    //modifying a Immutable object
    function ImmutablePublish(book){

        //"set" method creates a new object with all values if book and add new proprty
        //will return a new Immutable object
        return book.set("isPublished", true);
    }

    //Calling immutable function with new property into object
    let newBook = ImmutablePublish(bookImmutable);

    //"toJS" function to convert an object to js format
    console.log(newBook.toJS());

    



