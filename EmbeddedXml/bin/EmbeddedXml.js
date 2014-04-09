(function () { "use strict";
var Main = function() { };
Main.main = function() {
	var jq = new js.JQuery("test");
	console.log(jq.html());
};
var js = {};
var q = window.jQuery;
js.JQuery = q;
Main.main();
})();
