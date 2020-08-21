describe("Test Suite",function(){
	it("Action Class",function(){
		browser.waitForAngularEnabled(false);
		browser.get("https://rahulshettyacademy.com/AutomationPractice/");
		browser.actions().mouseMove(element(by.id("autocomplete")).click().sendKeys("Ind")).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			browser.sleep(5000)
		})
		
	})
})