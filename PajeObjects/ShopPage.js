function Shop(){
	
	this.shopbtn=element(by.css("a[href*='shop']"));
	this.checkoutbtn=element(by.partialLinkText("Checkout"));
};

module.exports=new Shop();