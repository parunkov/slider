var ncp = require('ncp').ncp;

ncp.limit = 16;
 
ncp('./karma-jasmine-jquery', './node_modules/karma-jasmine-jquery', function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
});

