const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { execSync } = require('child_process');

function getGitHash() {
    try {
        return execSync('git rev-parse --short HEAD').toString().trim();
    } catch (error) {
        console.error('Error fetching git hash:', error);
        return 'unknown';
    }
}

const isDevelopment = process.env.NODE_ENV !== 'production';
const version = `${getGitHash()}${isDevelopment ? '-dev' : ''}`;

module.exports = {
    mode: 'development',
    entry: './src/game.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // Ensure the output filename is set to 'bundle.js'
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, '/dist/'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: `Hacking Mini Game - ${version}`,
        }),
    ],
};
