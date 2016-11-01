exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        '*.tests.js',
        '**/*.tests.js'
    ],
    baseUrl: 'https://tk-testing-01-ohheyitslisa.c9users.io:8081',
    jasmineNodeOpts: {
        isVerbose: true
    },
    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path,
        'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    }
};