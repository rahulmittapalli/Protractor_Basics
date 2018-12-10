describe("Hello", function() {
	it("world", function() {
		browser.get("https://angularjs.org");
		browser.get("http://juliemr.github.io/protractor-demo/").then(function() 
				{
					console.log("Helo world");
				});
	})
})