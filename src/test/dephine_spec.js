describe("dephine base", function() {

    var d = new Dephine();

    beforeEach(function() {
        d.root = {};
        d.root.module1 = {};
        d.root.module1.module2 = {};
        d.root.module1.module2.Something = "hello";
    });

    it("resolves strings to root objects", function() {
        var str = d.resolve("module1.module2.Something");
        expect(str).toEqual("hello");

        var no = d.resolve("module1.nope");
        expect(no).toBe(null);
    });

    it("defines and uses modules", function() {
       var m = d.use("module1.module2.Something");
       expect(m).toEqual("hello");

        d.define("hello.world", function() {
           return {
               param1: "hello",
               param2: "world"
           }
        });

        m = d.use("hello.world");
        expect(m.param1).toEqual("hello");
        expect(m.param2).toEqual("world");
        expect(d.root.hello.world.param1).toEqual("hello");
    });
});
