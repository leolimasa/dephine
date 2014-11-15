var treeman_Tree = function () {
    if (this.definition) {
        return this.definition;
    }

    var Tree = function () {};
    var method = Tree.prototype;

    return (this.definition = Tree);
};

var treeman_Node = function () {
    if (this.definition) {
        return this.definition;
    }

    var NodeList = treeman_NodeList();

    var Node = function () {
        this.children = new NodeList();
    };
    var method = Node.prototype;

    return (this.definition = Node);
};

var treeman_NodeList = function () {
    if (this.definition) {
        return this.definition;
    }
    var NodeList = function () {};
    var method = NodeList.prototype = new Array();
    return (this.definition = NodeList);
};