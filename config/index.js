const configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
         return 'mongodb://' + configValues.uname + ':' + configValues.pass +
        '@ds119750.mlab.com:19750/nodetodosample';
    }
}