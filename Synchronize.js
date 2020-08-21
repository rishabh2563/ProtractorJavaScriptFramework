describe("Test Suite",function(){
	it("Synchronization",function(){
		browser.driver.manage().window().maximize();
		browser.waitForAngularEnabled(false);
		browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html")
		element(by.css("a[href*='loadAjax']")).click();
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.invisibilityOf(element(by.id("loader"))), 9000);
		element(by.id("results")).getText().then(function(text){
			console.log(text);
			
		})
	})
})