/**
 * 
 */
describe("chain locator", function() {
	it("change in the value", function() {
		browser.get("https://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("3");
		element(by.id("gobutton")).click();
		element(by.repeater("result in memory")).element(
				by.css("td:nth-child(3)")).getText().then(function(text) {
			console.log(text);
			expect("6").toBe(text);
		});
	})
})