require('zone.js/dist/zone-node');
require('reflect-metadata');
const fs = require('fs');
const { AppModuleNgFactory } = require('./dist/server/main.bundle');
const { renderModuleFactory } = require('@angular/platform-server');
renderModuleFactory(AppModuleNgFactory, {
    url: '/',
    document: fs.readFileSync('dist/browser/index.html', 'utf8')
}).then(html => {
    fs.writeFileSync('dist/index.html', html);
});
