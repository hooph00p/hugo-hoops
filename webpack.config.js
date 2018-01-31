const path = require('path');

module.exports = {
    entry: ['./src/scripts/index.js'],
    output: {
        path: path.resolve(__dirname, 'static/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(s*)(c|a)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};

