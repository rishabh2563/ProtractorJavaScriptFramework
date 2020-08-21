describe("Test Suite",function(){
	it("Alert Popup",function(){
		browser.waitForAngularEnabled(false);
		browser.get("https://rahulshettyacademy.com/AutomationPractice/")
		element(by.id("alertbtn")).click();
		browser.switchTo().alert().accept().then(function(){
			browser.sleep(5000);
		})
	})
})