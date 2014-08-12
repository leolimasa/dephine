var Dephine = function() {
    this.root = {};
    this.modules = {};
};

(function() {

    var method = Dephine.prototype;

    method.getRoot = function() {
        return this.root;
    };

    method.setRoot = function(root) {
        this.root = root;
    };

    /**
     * Attempts to convert a dotted string into an object stored at root.
     * If the object path doesn't exist, it returns null.
     *
     * @param module
     * @returns {*}
     */
    method.resolve = function(module) {
        var sections = module.split(".");
        var cur = this.root;
        for (var i=0; i<sections.length; i++) {
            cur = cur[sections[i]];
            if (!cur) {
                return null;
            }
        }
        return cur;
    };

    /**
     * Recursively goes through the root and builds empty objects if the
     * object has not yet been defined. Returns the second the last reference
     * to the path.
     *
     * @param module
     */
    method.makeModulePath = function(module) {
      var sections = module.split(".");
      var cur = this.root;
      var namespace = this.root;
      for (var i=0; i<sections.length; i++) {
          if (!cur[sections[i]]) {
              cur[sections[i]] = {};
          }
          namespace = cur;
          cur = cur[sections[i]];
      }

      return namespace;
    };

    /**
     * Defines a function which shall be executed once the module is used
     * for the first time.
     *
     * @param module
     * @param fun
     */
    method.define = function(module, fun) {
        this.modules[module] = fun;
    };

    /**
     * Returns the object stored in the path specified by the module, or,
     * if the path doesn't exist, executes the function that makes the module.
     *
     * @param module
     * @returns {*}
     */
    method.use = function(module) {

        var obj = this.resolve(module);
        if (obj) {
            return obj;
        }

        var mod = this.modules[module];
        if (!mod) {
            throw new Error("Cannot find module: " + module + ". If the module is defined, ensure the function is returning.");
        }

        var built = mod();
        var namespace = this.makeModulePath(module);
        var sections = module.split(".");
        namespace[sections[sections.length-1]] = built;

        return built;
    };

    /**
     * Registers the define() and import() functions globally.
     */
    method.init = function() {
        var self = this;

        this.getRoot().define = function(module, fun) { return self.define(module, fun) };
        this.getRoot().use = function(module) { return self.use(module); };
    };

})();

// for nodejs
if (typeof module != "undefined" && module) {
    module.exports = Dephine;
}