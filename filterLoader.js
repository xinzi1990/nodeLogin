var fs = require('fs');
var globalConfig = require('./config');

var filterFiles = fs.readdirSync(globalConfig['filter_path'])

var filterSet = [];

for(var i = 0; i < filterFiles.length; i++){
    var temp = require('./' + globalConfig['filter_path'] + '/' + filterFiles[i]);
    filterSet.push(temp);
}

module.exports = filterSet;