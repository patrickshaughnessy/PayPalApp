# PayPal SPA

This repo contains the NodeJS API and React SPA for the PayPal app.

### File directory:

```
.
+-- app           // main React front end files
+-- config        // server config
+-- internals     // webpack and other React config
+-- middlewares   // front end middleware for webpack
+-- routes        // server routes
|   +-- api           // API routes and data models
+-- test          // server tests
|   +-- unit          // unit tests
+-- app.js        // main server file
+-- package.json  // check scripts for run commands
```

### Setup

To get started clone the repo and install dependencies with <code>npm install</code>

Configure your environment variables as bash script files in a <code>.env</code> folder. For example:

    mkdir .env && touch development

Then in the development file:

    #!/bin/bash

    export NODE_ENV=development
    <Export your other environment variables>

    echo Environment sourced for development

You'll want to make production and test env source files as well

### Development

Start the server with <code>npm run start:dev</code> and navigate to localhost:3000. Everything is configured for all the goodies - hot reloading, ES6, routing, chunking, etc.

JS linting with Standard, CSS linting with stylelint.

Precommit hook runs linting for code maintainability.

### Production

To check the production build, run <code>npm run start:prod</code> and navigate to localhost:8080. The static React bundle is served up from the new <code>/build</code> folder. Webpack's Offline plugin starts a service worker to serve up the page even without a network connection.
