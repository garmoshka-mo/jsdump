var cache = [], result = {};
cache.push(cache);
cache.push(result);

function dive(into, result, depth) {
    
    if (depth > 2) return;
        
if (typeof into != 'object' 
    && typeof into != 'array'
   && typeof into != 'undefined') {
        result['type'] = typeof into;
        result['_'] = into;
        return;
    }
    
    if (into instanceof HTMLIFrameElement) {
        result = 'iframe, bitch'
        return;
    }
    
    if (cache.indexOf(into) !== -1) {
        
        // Circular reference found, discard key
        return;
    }
    // Store value in cache
    cache.push(into);
    
    for (x in into) {
        if (x == 'length'
            || x == 'fb_xdm_frame_https') continue;
        result[x] = {};
        dive(into[x], result[x], depth + 1);
    };
}
dive(window, result, 0);
JSON.stringify(result);



