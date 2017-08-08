module.exports = {
    entry: {
        index: './app.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    target: 'node'
}
