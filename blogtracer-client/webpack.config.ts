import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration
}

const config: Configuration = {
    entry: [
        "./src/core/index.tsx"
    ],
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json", ".jpg"],
        alias: {
            "@containers": path.resolve(__dirname, './src/pages/containers'),
            "@common-components": path.resolve(__dirname, './src/components/_common'),
            "@components": path.resolve(__dirname, './src/components'),
            "@styles": path.resolve(__dirname, './src/sass'),
            "@": path.resolve(__dirname, './src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-react", { "runtime": "automatic" }],
                            "@babel/preset-env",
                            "@babel/preset-typescript"
                        ],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            implementation: require.resolve("sass"),
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        historyApiFallback: true,
        compress: true,
        hot: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            hash: true, // Cache busting
            filename: '../dist/index.html'
        }),
        new ForkTsCheckerWebpackPlugin()
    ],
};

export default config;