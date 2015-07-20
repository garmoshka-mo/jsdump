var files = new function() {

    var self = this;
    
    this.write = function(data) {
        self.data = data;
        request();
    }
    
    function onInitFs(fs) {

        var filename = Math.round(Math.random() * 10000)
        
      fs.root.getFile(filename+'.txt', {create: true}, function(fileEntry) {
          
        // Create a FileWriter object for our FileEntry (log.txt).
        fileEntry.createWriter(function(fileWriter) {

          fileWriter.onwriteend = function(e) {
            console.log('Write completed.');
          };

          fileWriter.onerror = function(e) {
            console.log('Write failed: ' + e.toString());
          };

          // Create a new Blob and write it to log.txt.
          var blob = new Blob([self.data], {type: 'text/plain'});

          fileWriter.write(blob);

        }, errorHandler);

      }, errorHandler);

    }

    function request() {
        window.webkitStorageInfo.requestQuota(PERSISTENT, 1024*1024, function(grantedBytes) {
          window.webkitRequestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);
        }, errorHandler);
    }

    function errorHandler(e) {
      console.log('Error', e);
    }
}