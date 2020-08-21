describe("Test Suite",function(){
	function add(a,b){
		element(by.model("first")).sendKeys(a)
		element(by.model("second")).sendKeys(b)
		element(by.id("gobutton")).click();
	}
	it("Locator Chaining",function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
		add(2,3);
		add(2,4);
		add(2,5);
		element.all(by.repeater("result in memory")).count().then(function(count) {
			console.log(count);	
		})
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText()
			.then((text)=>{
				console.log(text);
			})
			
		})
	})
})