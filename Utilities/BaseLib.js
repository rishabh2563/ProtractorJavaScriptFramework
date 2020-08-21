function Browserlaunch(){
	this.getUrl=function(){
		browser.get("https://qaclickacademy.github.io/protocommerce/");
	}
};
module.exports=new Browserlaunch();
