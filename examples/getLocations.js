var OpenPaths = require('../main.js').OpenPaths,
    key = 'YOUR_KEY',
    secret = 'YOUR_SECRET',
    openPaths = new OpenPaths(key, secret);

openPaths.getLocations(function(error, data, response){
    
    console.log(data);
    
});

openPaths.getLocations({
    num_points: 1
}, function(error, data, response){
    
    console.log(data);
    
});