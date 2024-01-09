const { defineConfig } = require('cypress');

module.exports = defineConfig({
    chromeWebSecurity: false,
    numTestsKeptInMemory: 10,
    projectId: '8vb812bn',
    trashAssetsBeforeRuns: false,
    viewportHeight: 1920,
    viewportWidth: 1080,
    waitForAnimations: true,
    video: true,
    retries: 0,
    videoCompression: 0,
    responseTimeout: 90000,
    requestTimeout: 30000,
    env: {
        // Here are some variables that MUST be taken from any vault app
        USERNAME: 'john', // This MUST NOT be uploaded to any repo
        PASSWORD: '123', // This MUST NOT be uploaded to any repo
        CLIENT_ID: 'XXXX',
        CLIENT_SECRET: 'XXXX',
        ID_COOKIE: 'XXXX',
        AUTH0_MGMT_TOKEN: 'Tokencito', // This MUST NOT be uploaded to any repo
        AUTH0_TENANT_URL: 'http://localhost:3000/auth0',
        AUTH_API: 'http://localhost:3000/oauth/token',
    },
    e2e: {
        setupNodeEvents(on, config) {
            // require('cypress-terminal-report/src/installLogsPrinter')(on);
            return require('./cypress/plugins/index.js')(on, config);
        },
        baseUrl: 'http://127.0.0.1:5500/src/app/',
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    },
});
