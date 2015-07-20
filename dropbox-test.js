var client = new Dropbox.Client({ key: dropkey });
client.authenticate(function () {
    client.writeFile('hello.txt', 'Hello, World!', function () {
        alert('File written!');
    });
});



var client = new Dropbox.Client({ key: dropkey });
client.authenticate(function () {
    client.readFile('hello.txt', {}, function (f) {
        alert(f);
    });
});
