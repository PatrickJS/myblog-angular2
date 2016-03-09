// import {bootstrap} from 'angular2/platform/browser';

import 'angular2-universal-preview/polyfills';
import {prebootComplete} from 'angular2-universal-preview';
import {HTTP_PROVIDERS} from 'angular2/http';

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {App} from './app/app';

bootstrap(App, [
    ...ROUTER_PROVIDERS,
    ...HTTP_PROVIDERS
])
.then(prebootComplete)
