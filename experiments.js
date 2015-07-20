

    Object.keys(into).forEach(function(x) {
        result[x] = {};
        dive(into[x], result[x], depth + 1);
    });











    Object.keys(window.document).forEach(function(x) {
        console.log(x);
    });


for (x in window.document) {
        console.log(x);
    };



var r = JSON.stringify(window, function(key, value) {
    if (typeof value === 'object' && value !== null) {
        
        if (value instanceof HTMLIFrameElement)
            return;
        
        if (cache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return;
        }
        // Store value in our collection
        cache.push(value);
    }
    return value;
});
cache = null; // Enable garbage collection
