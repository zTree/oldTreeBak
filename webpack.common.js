const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const UglifyJS = require("uglify-js");
const webpack = require("webpack");


console.log('webpack.common.js');

let jsPublishDist = './zTreeAPI/publish';
let jsTargetDist = './zTreeAPI/WebContent/js/jquery.ztree.*.js';
let jsTarget = './zTreeAPI/WebContent/js';
let jsSrc = './zTreeAPI/WebContent/js/src';


let allFiles = [
  {name: 'core', isForAll: true}, 
  {name: 'excheck', isForAll: true}, 
  {name: 'exedit', isForAll: true}, 
  {name: 'exhide', isForAll: false}
];

module.exports = env => {

  const isProduction = env === 'production';

  let mergeFiles = [];
  let allFile = {src: [], dest: `../${jsTarget}/jquery.ztree.all.js`};
  let allFileMin = {src: [], dest: `../${jsTarget}/jquery.ztree.all.min.js`};
  for (let item of allFiles) {
    if (item.isForAll) {
      allFile.src.push(`../${jsTarget}/jquery.ztree.${item.name}.js`);
      allFileMin.src.push(`../${jsTarget}/jquery.ztree.${item.name}.min.js`);
    }    
    let file = {
      src: [
        `${jsTarget}/${item.name}.txt`,
        `${jsTarget}/version.txt`,
        `${jsSrc}/jquery.ztree.${item.name}.js`
      ],
      dest: code => {
        let dest = {};
        let min = UglifyJS.minify(code);
        dest[`../${jsTarget}/jquery.ztree.${item.name}.js`] = code;
        if (isProduction) {
          dest[`../${jsTarget}/jquery.ztree.${item.name}.min.js`] = min.code;
        }            
        return dest;
      }
    };
    mergeFiles.push(file);
  }
  // mergeFiles.push(allFile);
  // if (isProduction) {
  //   mergeFiles.push(allFileMin);
  // }  
  console.log(JSON.stringify(allFile));

  return {
    mode: env,
    module: {
      rules: [
        
      ]
    },
    plugins: [

      new MergeIntoSingleFilePlugin({
        files: [allFile]
      }, () => {
        console.log('merge allFile over ----------------------')
      }),
      
      new MergeIntoSingleFilePlugin({
        files: mergeFiles
      }, () => {
        // var a = new MergeIntoSingleFilePlugin({
        //   files: [allFile]
        // }, () => {
          console.log('merge over ----------------------')
        // });
        // console.log(JSON.stringify(a));
      }),


      new CleanWebpackPlugin(['dist', jsPublishDist, jsTargetDist], {
        root: path.resolve(__dirname, './'),
        verbose: true,
        dry: false
      }),
      // new CopyWebpackPlugin([
      //   { from: 'static/**/*'},
      // ], {
      //   ignore: [ '' ]
      // }),
    ],
    // resolve: {
    //   extensions: [ '.js' ]
    // },
    entry: {
      zTree: './zTreeAPI/WebContent/js/src/jquery.ztree.core.js',
    }
  };
};