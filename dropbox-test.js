(function(d, script) {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function(){
        // remote script has loaded
    };
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/dropbox.js/0.10.3/dropbox.min.js';
    d.getElementsByTagName('head')[0].appendChild(script);
}(document));


var client = new Dropbox.Client({ key: dropkey });
client.authenticate(function () {
    client.writeFile('hello.txt', 'Hello, World!', function () {
        alert('File written!');
    });
});


var client = new Dropbox.Client({ key: dropkey });
client.authenticate(function () {
    client.writeFile('dump.json', JSON.stringify(result), function () {
        alert('File written!');
    });
});



var client = new Dropbox.Client({ key: dropkey });
client.authenticate(function () {
    client.readFile('hello.txt', {}, function (f) {
        alert(f);
    });
});
