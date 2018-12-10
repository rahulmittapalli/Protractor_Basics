/**
 * 
 */

describe("Opening a webpage", function() {
	it("angular JS web Page", function() {
//		browser.waitForAngular(false);
//		browser.get("https://www.google.com");
		browser.get("https://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys("5");
		element(by.model("second")).sendKeys("4");
		element(by.id("gobutton")).click();
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log(text);
			expect('9').toBe(text);
		})
	})
})