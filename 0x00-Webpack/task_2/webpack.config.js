const path = require('path')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'js/dashboard_main.js'),

    output: {
        path: path.resolve(__dirname, 'public' ),
        filename: 'bundle.js',
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpe?g|ico|gif)$/i,
            use: [
            {
                loader: 'image-webpack-loader',
                options: {
                    bypassOnDebug: true,
                    disable: true,
                },
            },
            ],
        },
        ],
    },
};
