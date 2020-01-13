// const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');


console.log('webpack.all.js');

let jsTarget = './zTreeAPI/WebContent/js';


let zTreeFiles = [
  {name: 'core', isForAll: true}, 
  {name: 'excheck', isForAll: true}, 
  {name: 'exedit', isForAll: true}, 
  {name: 'exhide', isForAll: false}
];

module.exports = env => {

  const isProduction = env === 'production';

  let allFile = {src: [], dest: `../${jsTarget}/jquery.ztree.all.js`};
  let allFileMin = {src: [], dest: `../${jsTarget}/jquery.ztree.all.min.js`};
  for (let item of zTreeFiles) {
    if (item.isForAll) {
      allFile.src.push(`${jsTarget}/jquery.ztree.${item.name}.js`);
      allFileMin.src.push(`${jsTarget}/jquery.ztree.${item.name}.min.js`);
    }
  }
  let allFiles = [allFile];
  if (isProduction) {
    allFiles.push(allFileMin);
  }
  return {
    mode: env,
    module: {
      rules: [
        
      ]
    },
    plugins: [

      new MergeIntoSingleFilePlugin({
        files: allFiles
      }, () => {
        console.log('merge allFile over ----------------------')
      }),
    ],
    entry: {
      zTree: './zTreeAPI/WebContent/js/src/blank.js',
    }
  };
};