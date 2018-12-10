/**
 * 
 */
describe("chain locator", function() {
	function Add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);	
		element(by.id("gobutton")).click();
		
	}
	
	
	it("change in the value", function() {
		browser.get("https://juliemr.github.io/protractor-demo/");
		Add(2,2);
		Add(3,3);
		Add(4,4);
		Add(5,5);
		Add(6,6);

		element.all(by.repeater("result in memory")).count().then(function(number){
			console.log(number);
		});
		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(3")).getText().then(function(value){
				console.log(value);
			})
		});
	})
})