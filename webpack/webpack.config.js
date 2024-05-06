const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const printFunction = (str, args) => {
    console.log(`${str} - ${args}`)
};

module.exports = (envVars) => {
    const { env } = envVars;
    printFunction('env', env);
    printFunction('commonConfig', commonConfig);
    const envConfig = require(`./webpack.${env}.js`);
    printFunction('envConfig', JSON.stringify(envConfig));
    const config = merge(commonConfig, envConfig);
    printFunction('config', config);
    return config;
}