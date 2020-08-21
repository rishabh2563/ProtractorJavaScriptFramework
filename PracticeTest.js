
describe("Test Suite", function() {
	
	var hp = require('./PajeObjects/HomePage.js');
	var shop = require('./PajeObjects/ShopPage.js');
	var cart = require('./PajeObjects/CartPage.js');
	var browser = require('./Utilities/BaseLib.js');
	var d = require('./Utilities/Data.js');
	var using = require('jasmine-data-provider');
	beforeEach(function() {
		browser.getUrl();
	});

	function shopitems(ProductName) {
		element.all(by.tagName("app-card")).each(function(item) {

			item.element(by.css("h4 a")).getText().then(function(cardText) {
				if (cardText == ProductName) {
					item.element(by.css("button[class*='btn-info']")).click();
				}
			})

		})

	}
	// data stores actual data block {name:,email etc.}
	// description stores sub object name {FirstDataset,SecondDataset}
	// for each iteration a new data set will be picked.
	using(d.Datadrive, function(data, description) {

		it("Add devices to cart and verify the Total using"+ description, function() {
			var sum = 0;
			var total = 0;
			hp.name.sendKeys(data.name);
			hp.email.sendKeys(data.email);
			hp.password.sendKeys(data.password);
			hp.checkbox.click();
			hp.dropdown;
			hp.radiobtn.get(1).click();
			hp.submitBtn.click().then(function() {
				hp.successtext.getText().then(function(text) {
					console.log(text);
				})
			})
			hp.name.clear();
			hp.name.sendKeys(data.character).then(function() {
				hp.dangertext.getText().then(function(text1) {
					console.log(text1);
				})
			})
			hp.dangertext.count().then(function(count) {
				console.log(count);
				expect(count).toEqual(1);
			})
			shop.shopbtn.click();
			shopitems(data.productname.samsung);
			shopitems(data.productname.apple);

			shop.checkoutbtn.getText().then(function(btntext) {
				var res = btntext.split("(");
				expect(res[1].trim().charAt(0)).toBe("2")
			})
			shop.checkoutbtn.click();
			cart.DeviceTotal.each(function(eles) {
				eles.getText().then(function(text) {
					var res1 = text.split(".");
					var amount = Number(res1[1].trim());
					sum = sum + amount;
				})
			}).then(function() {
				cart.carttotal.getText().then(function(totaltext) {
					var res2 = totaltext.split(".");
					total = Number(res2[1].trim());
					expect(total).toEqual(sum);
				})
			})
		});
	});
	afterEach(function() {
		console.log("Test is successfuly Completed!")
	});
});