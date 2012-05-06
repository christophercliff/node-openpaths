var OAuth = require('oauth').OAuth,
    QueryString = require('querystring');

var OpenPaths = exports.OpenPaths = function(key, secret, version) {
    
    var version = (typeof version === 'number') ? version : 1,
        endpoint = 'https://openpaths.cc/api/' + version,
        oauth = new OAuth('', '', key, secret, '1.0', null, 'HMAC-SHA1', {});
    
    this.getLocations = function (params, callback) {
        
        if (!oauth)
        {
            throw 'RuntimeException: OAuth was not instantiated';
        }
        
        if (typeof params === 'function')
        {
            callback = params;
            params = [];
        }
        
        if (typeof callback !== 'function')
        {
            callback = function(){};
        }
        
        var querystring = QueryString.stringify(params),
            resource = endpoint + '?' + querystring;
        
        console.log('Requested resource: ' + resource);
        
        oauth.get(resource, '', '', callback);
        
    }
    
}