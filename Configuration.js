var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
	// seleniumAddress: 'http://localhost:4444/wd/hub',
	specs : [ 'PracticeTest.js' ],
	capabilities : {
		'browserName' : 'chrome',
		'goog:chromeOptions' : {
			w3c : false
		}
	},
	onPrepare : function() {
		browser.driver.manage().window().maximize();
		browser.manage().timeouts().implicitlyWait(9000);
		browser.manage().timeouts().setScriptTimeout(60000);
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath : 'target/screenshots'
		}));
	},
	suites :{
		smoke:['AllElement.js','ChainLocator.js']
		
	},
	jasmineNodeOpts : {
		showColors : true, // Use colors in the command line report.
	}
};