function Cart(){
	this.DeviceTotal=element.all(by.css("tr td[class*='text-center']:nth-child(4)"));
	this.carttotal=element(by.css("h3 strong"));
};
module.exports=new Cart();