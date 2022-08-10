// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production'

const stylesHandler = 'style-loader'

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: 'invite_your_team.html',
            filename: 'invite_your_team.html',
        }),
        new HtmlWebpackPlugin({
            template: 'invite_your_team_success.html',
            filename: 'invite_your_team_success.html',
        }),
        new HtmlWebpackPlugin({
            template: 'fill_out_a_report.html',
            filename: 'fill_out_a_report.html',
        }),
        new HtmlWebpackPlugin({
            template: 'my_company.html',
            filename: 'my_company.html',
        }),
        new HtmlWebpackPlugin({
            template: 'my_reports.html',
            filename: 'my_reports.html',
        }),
        new HtmlWebpackPlugin({
            template: 'edit_profile.html',
            filename: 'edit_profile.html',
        }),
        new HtmlWebpackPlugin({
            template: 'team_reports.html',
            filename: 'team_reports.html',
        }),
        new HtmlWebpackPlugin({
            template: 'extended_team_reports.html',
            filename: 'extended_team_reports.html',
        }),
        new HtmlWebpackPlugin({
            template: 'team_members.html',
            filename: 'team_members.html',
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
}

module.exports = () => {
    if (isProduction) {
        config.mode = 'production'
    } else {
        config.mode = 'development'
    }
    return config
}
