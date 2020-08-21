describe("Test Suite",function(){
	function Calc(a,b,c){
		element(by.model("first")).sendKeys(a)
		element(by.model("second")).sendKeys(b)
		element(by.id("gobutton")).click();
		element.all(by.tagName("option")).each(function(item) {
			item.getAttribute("value").then(function(values){
				if(values==c){
					item.click();
				}
			})
			
		})
	}
	it("Locator Chaining",function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
		Calc(3,5,"MULTIPLICATION");
		Calc(10,2,"SUBTRACTION");
		Calc(3,7,"ADDITION");
		Calc(4,2,"DIVISION");
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText()
			.then((text)=>{
				console.log(text);
			})
			
		})
		
	})
})