/**
 * Created by chenli on 2015/3/29.
 */
define(function (require) {
    console.log("main");
    var module1 = require("module1");
    var module2 = require("module2");
    document.getElementById("module1").innerHTML = "module1的计算结果为：" + module1.add(1,2);
    document.getElementById("module2").innerHTML = "module2的计算结果为：" + module2.minus(4,2);
    return {};
});

//AMD
//define(["module1","module2"],function (mod1,mod2) {
//    console.log("main");
//    document.getElementById("module1").innerHTML = "module1的计算结果为：" + mod1.add(1,2);
//    document.getElementById("module2").innerHTML = "module2的计算结果为：" + mod2.minus(4,2);
//    return {};
//});
