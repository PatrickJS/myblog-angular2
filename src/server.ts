import * as path from 'path';
import * as express from 'express';

// Angular 2
import 'angular2-universal-preview/polyfills';
import {
  expressEngine,
  REQUEST_URL,
  NODE_LOCATION_PROVIDERS,
  NODE_PRELOAD_CACHE_HTTP_PROVIDERS
} from 'angular2-universal-preview';

import {provide, enableProdMode} from 'angular2/core';

import {APP_BASE_HREF, ROUTER_PROVIDERS} from 'angular2/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {App} from './app/app';

let app = express();
let root = path.join(path.resolve(__dirname, '..'));

enableProdMode();

// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

function ngApp(req, res) {
    let baseUrl = '/';
    let url = req.originalUrl || '/';
    res.render('index', {
        directives: [App],
        providers: [
            provide(APP_BASE_HREF, { useValue: baseUrl }),
            provide(REQUEST_URL, { useValue: url }),
            ROUTER_PROVIDERS,
            NODE_LOCATION_PROVIDERS,
            NODE_PRELOAD_CACHE_HTTP_PROVIDERS
        ],
        async: true,
        preboot: true,
        precache: true,
    });
}

// Serve static files
app.use(express.static(root));

// Routes
app.use('/', ngApp);
app.use('/blog/:title', ngApp);
app.use('/about', ngApp);

// Server
app.listen(3000, () => {
    console.log('Listen on http://localhost:3000');
});