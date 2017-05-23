
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/**/*.js'],
    baseUrl: 'http://localhost:9001', //default test port with Yeoman
    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    }
}
