const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const UglifyJS = require("uglify-js");


console.log('webpack.common.js');

let jsTargetDist = './zTreeAPI/WebContent/js/jquery.ztree.*.js';
let jsTargetDistForWeb = './zTreeWeb/web3.0_Design/js/jquery.ztree.*.js';
let jsTargetDistForApi = './zTreeWeb/web3.0_Design/api/apiCss/jquery.ztree.*.js';
let jsTarget = './zTreeAPI/WebContent/js';
let jsTargetForWeb = './zTreeWeb/web3.0_Design/js';
let jsTargetForApi = './zTreeWeb/web3.0_Design/api/apiCss';

let jsSrc = './zTreeAPI/WebContent/js/src';


let zTreeFiles = ['core', 'excheck', 'exedit', 'exhide'];

module.exports = env => {

  const isProduction = env === 'production';

  let mergeFiles = [];
  for (let name of zTreeFiles) {
    let file = {
      src: [
        `${jsTarget}/${name}.txt`,
        `${jsTarget}/version.txt`,
        `${jsSrc}/jquery.ztree.${name}.js`
      ],
      dest: code => {
        let dest = {};
        dest[`../${jsTarget}/jquery.ztree.${name}.js`] = code;
        if (isProduction) {
          let min = UglifyJS.minify(code);
          dest[`../${jsTarget}/jquery.ztree.${name}.min.js`] = min.code;
          dest[`../${jsTargetForWeb}/jquery.ztree.${name}.js`] = min.code;
          if (name === 'core') {
            dest[`../${jsTargetForApi}/jquery.ztree.${name}.js`] = min.code;
          }
        }            
        return dest;
      }
    };
    mergeFiles.push(file);
  }
  return {
    mode: env,
    module: {
      rules: [
        
      ]
    },
    plugins: [

      new CleanWebpackPlugin(['dist', jsTargetDist, jsTargetDistForWeb, jsTargetDistForApi], {
        root: path.resolve(__dirname, './'),
        verbose: true,
        dry: false
      }),
      new MergeIntoSingleFilePlugin({
        files: mergeFiles
      }, () => {
        console.log('merge single file over ----------------------')
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