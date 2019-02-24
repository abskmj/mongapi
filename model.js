const query = require('@abskmj/query');

let Model = function(name, options) {
    let defaultOptions = {
        axios: null,
        uri: '',
        plugins: {}
    }
    
    options = Object.assign(defaultOptions, options);
    
    // attach plugins
    for( let pluginName in options.plugins){
        let pluginOptions = options.plugins[pluginName];
        
        let plugin = require(pluginName)(pluginOptions);
        
        Object.assign(Model.prototype, plugin);
    }
    
    this.axios = options.axios.create( {
        baseURL: options.axios.defaults.baseURL + options.uri,
    });
}

module.exports = Model;
