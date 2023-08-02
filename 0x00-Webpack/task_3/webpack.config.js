const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8564,
    },
    entry: {
        header: '../modules/header/header.js',
        body: '../modules/body/body.js',
        footer: 'modules/footer/footer.css',
      },

    output: {
        path: path.resolve(__dirname, 'public' ),
        filename: 'bundle.js',
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jp?g|ico|gif|svg)$/i,
            use: [
                'file-loader',
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
