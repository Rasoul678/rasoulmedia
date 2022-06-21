process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackConfig = require('react-scripts/config/webpack.config')('production');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const green = (text) => {
    return chalk.green.bold(text)
}

webpackConfig.plugins.push(new WebpackBundleAnalyzer());
webpackConfig.plugins.push(new ProgressBarPlugin(
    {
        format: `${green('analyzing...')} ${green('[:percent]')}${green('[:elapsed seconds]')} -- :msg`
    }
));

webpack(webpackConfig, (err, stats) => {
    if(err || stats.hasError()){
        console.log(err)
    }
})

