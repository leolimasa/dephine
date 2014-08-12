define("zoo.animals.Animal", function() {

    var Animal = function() {
    };

    var method = Animal.prototype;

    method.say = function() {
      document.getElementById("out").innerHTML = this.sayString;
    };

    return Animal;

});