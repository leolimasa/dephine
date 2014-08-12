var DephineBrowser = function() {
  Dephine.call(this);
  this.root = window;
};

DephineBrowser.prototype = new Dephine();

var dephine = new DephineBrowser();
dephine.init();

