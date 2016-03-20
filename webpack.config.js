// @AngularClass

/*
 * Helper
 * env(), getBanner(), root(), and rootDir()
 * are defined at the bottom
 */
var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);
var toString = Function.prototype.call.bind(Object.prototype.toString);
var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
// Webpack Plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var commonConfig = {
    resolve: {
        extensions: ['', '.ts', '.js', '.json'],
    },
    module: {
        loaders: [
            // Support for *.json files.
            { test: /\.json$/, loader: 'json' },

            // Support for CSS as raw text
            { test: /\.css$/, loader: 'raw' },

            //sass loader implementation
            { test: /\.scss$/, loaders: ["css", "sass"] },

            // support for .html as raw text
            { test: /\.html$/, loader: 'raw' },

            // inline base64 URLs for <=8k images, direct URLs for the rest
            { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=8192' },

            // Support for .ts files.
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: [/node_modules/]
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true)
    ]
};

var clientConfig = {
    target: 'web',
    entry: {
        'vendor': './src/vendor',
        'client': './src/client'
    },
    output: {
        path: __dirname + '/dist/client'
    }
};

var serverConfig = {
    target: 'node',
    entry: './src/server',
    output: {
        path: __dirname + '/dist/server'
    },
    externals: checkNodeImport,
    node: {
        global: true,
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: true
    }
};



// Default config
var defaultConfig = {
    module: {
        noParse: [
            path.join(__dirname, 'zone.js', 'dist'),
            path.join(__dirname, 'angular2', 'bundles')
        ]
    },
    context: __dirname,
    resolve: {
        root: path.join(__dirname, '/src')
    },
    output: {
        publicPath: path.resolve(__dirname),
        filename: 'bundle.js'
    }
}

/*
 * Config
 */
module.exports = [
    // Client
    webpackMerge({}, defaultConfig, commonConfig, clientConfig),

    // Server
    webpackMerge({}, defaultConfig, commonConfig, serverConfig)
];

// Helpers
function checkNodeImport(context, request, cb) {
    if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
        cb(null, 'commonjs ' + request); return;
    }
    cb();
}