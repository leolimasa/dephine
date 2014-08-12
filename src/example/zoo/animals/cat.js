define("zoo.animals.Cat", function() {

    var Animal = use("zoo.animals.Animal");

    var Cat = function() {
        this.sayString = "meow";
    };

    Cat.prototype = new Animal();

    return Cat;
});