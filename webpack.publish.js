const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJS = require("uglify-js");
const PACKAGE = require('./package.json');

const version = PACKAGE.version;

console.log('webpack.publish.js');

let jsPublishDist = './zTreeAPI';
let webPublishDist = './zTreeWeb';
let target = './zTreeAPI/WebContent';
let targetForWeb = './zTreeWeb/web3.0_Design';


module.exports = env => {

  const isProduction = env === 'production';

  return {
    mode: env,
    module: {
      rules: [
        
      ]
    },
    plugins: [

      new CopyWebpackPlugin([
        { from: `${target}/css`, to: `${jsPublishDist}/css`},
        { from: `${target}/demo`, to: `${jsPublishDist}/demo`},
        { from: `${target}/doc/*3.x.txt`, to: `${jsPublishDist}/[name].[ext]`},
        { from: `${target}/js/jquery*.js`, to: `${jsPublishDist}/js/[name].[ext]`},
        { from: `${target}/forNPM`, to: `${jsPublishDist}`,
          transform(content, path) {
            return content.toString().replace('${version}', version);
          }
        },
        { from: `${targetForWeb}/api`, to: `${jsPublishDist}/api`},
        
        { from: `${targetForWeb}`, to: `${webPublishDist}`, ignore: ['js/*.js']},
        { from: `${targetForWeb}/js`, to: `${webPublishDist}/js/[name].[ext]`, 
          transform(content, path) {
            let code = content.toString();
            if (path.indexOf('jquery') > -1) {
              return code;
            } else {
              let min = UglifyJS.minify(code);
              return min.code;
            }
          }
        },

      ], {
        ignore: [ '' ],
        logLevel: 'error'
      }),

    ],
    // resolve: {
    //   extensions: [ '.js' ]
    // },
    entry: {
      zTree: './zTreeAPI/WebContent/js/src/blank.js',
    }
  };
};