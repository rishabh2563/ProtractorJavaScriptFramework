describe("Test Suite",function(){
	it("Open Browser",function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys("3")
		element(by.model("second")).sendKeys("5")
		element(by.id("gobutton")).click();
		
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
	
		element(by.css("h2[class='ng-binding']")).getText().then((text)=>{
			console.log(text);
		})
	})
	
})