describe("Test Suite",function(){
	it("Frame",function(){
		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
		browser.get("https://rahulshettyacademy.com/AutomationPractice/")
		browser.switchTo().frame("courses-iframe");
		element(by.css("a[href*='sign_in']")).getText().then(function(text){
			console.log(text);
		})
		
	})
})