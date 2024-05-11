const {defineConfig} = require("cypress");
const {beforeRunHook, afterRunHook} = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
    screenshotsFolder: 'cypress/screenshots',
    screenshotOnRunFailure: true,
    screenshotOnAssertFailure: true,
    trashAssetsBeforeRuns: false,
    screenshots: true,
    videosFolder: 'cypress/videos',
    video: false,
    downloadsFolder: 'cypress/downloads',
    fixturesFolder: 'cypress/fixtures',
    viewportHeight: 660,
    viewportWidth: 1000,
    waitForAnimations: true,
    watchForFileChanges: true,
    //screenshotOnRunFailure: false,
    /*reporter: 'cypress-mochawesome-reporter', reporterOptions: {
        charts: true,
        reportPageTitle: 'custom-title',
        reportDir: 'cypress/reports',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: true,
    },*/

    reporter: "cypress-multi-reporters",
    reporterOptions: {
        reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
        mochaJunitReporterReporterOptions: {
            mochaFile: "cypress/reports/junit/results-[hash].xml"
        },
        cypressMochawesomeReporterReporterOptions: {
            charts: true,
            reportPageTitle: "custom-title",
            reportDir: 'cypress/reports',
            embeddedScreenshots: true,
            inlineAssets: true,
            saveAllAttempts: true,
        }
    },

    env: {}, projectId: '5r89t6', e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require('cypress-mochawesome-reporter/plugin')(on);
            on('before:run', async (details) => {
                console.log('override before:run');
                await beforeRunHook(details);
            });

            on('after:run', async () => {
                console.log('override after:run');
                await afterRunHook();
            });
        },
    },
});
