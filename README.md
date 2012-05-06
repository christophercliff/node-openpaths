# openpaths

A Node.js client for the [OpenPaths API](https://openpaths.cc/api).

## Installation

```
npm install openpaths
```

## Usage

```js
var OpenPaths = require('openpaths').OpenPaths,
    key = 'YOUR_KEY',
    secret = 'YOUR_SECRET',
    openPaths = new OpenPaths(key, secret);

openPaths.getLocations(function(error, data, response){
    
    console.log(data);
    
});
```