const {defineConfig} = require("cypress");
const {beforeRunHook, afterRunHook} = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
    //screenshotsFolder: 'cypress/screenshots',
    //videosFolder: 'cypress/videos',
    //reporter: 'mochawesome',
    reporter: 'cypress-mochawesome-reporter', reporterOptions: {
        charts: true,
        reportPageTitle: 'custom-title',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    }, //video: true,
    //screenshotOnRunFailure: true,

    env: {
        // codeCoverage: {
        //     url: 'http://localhost:3000/__coverage__',
        // },
    }, projectId: '5r89t6', e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            on('before:run', async (details) => {
                console.log('override before:run');
                await beforeRunHook(details);
            });

            on('after:run', async () => {
                console.log('override after:run');
                await afterRunHook();
            });
            // implement node event listeners here
            //require('@cypress/code-coverage/task')(on, config)
            //on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
        },
    },
});
