var ignoreKeys = ['fb_xdm_frame_https',
                  'length', 'localStorage', 'sessionStorage'];
var cache = [], result = {};
cache.push(cache);
cache.push(result);

function dive(into, result, depth, path) {
    
    if (depth > 6) return;
        
    if (typeof into == 'string') {
        var reg = /stringinside/g;
        if (!!into.match(reg)) {
            console.log(path)
            console.log(into);
        }
    }

    
    
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
        if (ignoreKeys.indexOf(x) > -1) continue;
        result[x] = {};
        
        var reg = /target/g;
        if (!!x.match(reg)) {
            console.log(path)
            console.log(into[x]);
        }
        
        dive(into[x], result[x], depth + 1, path+'.'+x);
    };
}

dive(window, result, 0, 'window');