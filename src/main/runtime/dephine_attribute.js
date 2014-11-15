var dephine_Attribute = function () {
    if (this.definition) {
        return this.definition;
    }

    var Attribute = function () {};
    var method = Attribute.prototype;

    method.set_name = function (name) {
        this.name = name;
    };

    method.get_name = function (name) {
        return this.name;
    };

    return (this.definition = Attribute);
};