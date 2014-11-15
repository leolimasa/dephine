var dephine_DephineClass = function () {

    if (this.definition) {
        return this.definition;
    }

    var Attribute = dephine_Attribute();

    var DephineClass = function () {};
    var method = DephineClass.prototype;

    method.set_build = function (build) {
        this.build = build;
    };

    method.get_build = function () {
        return this.build;
    };

    method.set_class_name = function (name) {
        this.class_name = name;
    };

    method.get_class_name = function () {
        return this.class_name;
    };

    method.set_namespace = function (namespace) {
        this.namespace = namespace;
    };

    method.get_namespace = function () {
        return this.namespace;
    };

    method.set_attributes = function (attributes) {
        this.attributes = attributes;
    };

    return (this.definition = DephineClass);
};