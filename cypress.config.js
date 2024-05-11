const {defineConfig} = require("cypress");

module.exports = defineConfig({
    //screenshotsFolder: 'cypress/screenshots',
    //videosFolder: 'cypress/videos',
    reporter: 'mochawesome',
    //video: true,
    //screenshotOnRunFailure: true,

    env: {
        // codeCoverage: {
        //     url: 'http://localhost:3000/__coverage__',
        // },
    }, projectId: '5r89t6', e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            //require('@cypress/code-coverage/task')(on, config)
            //on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
            return config
        },
    },
});
