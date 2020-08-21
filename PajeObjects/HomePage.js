function Home(){
	this.name=element(by.css("div[class='form-group'] input[name='name']"));
	this.email=element(by.name("email"));
	this.password=element(by.id("exampleInputPassword1"));
	this.checkbox=element(by.xpath("//input[@type='checkbox']"));
	this.dropdown=element(by.cssContainingText("select[id='exampleFormControlSelect1'] option","Male"));
	this.radiobtn=element.all(by.name("inlineRadioOptions"));
	this.submitBtn=element(by.xpath("//input[@type='submit']"));
	this.successtext=element(by.css("div[class*='success']"));
	this.dangertext=element.all(by.css("div[class*='danger']"));	
};
module.exports=new Home();