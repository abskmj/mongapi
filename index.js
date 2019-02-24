const Model = require('./model');

module.exports = function(options) {

    let defaultOptions = {
        axios: null,
        models: {}
    }
    
    options = Object.assign(defaultOptions, options);
    
    // check axios indtance
    if(!options.axios){
        throw new Error('options.axios is not valid');
    }
    
    let instance = {};
    
    // attach models
    for(let modelName in options.models){
        let modelOptions = options.models[modelName];
        
        modelOptions.axios = options.axios;
        
        instance[modelName] = new Model(modelName, modelOptions);
    }
    
    return instance;
}
