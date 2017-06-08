var FileManager = function() {
  var fileManager;
  var listView;
  var infoBar;
  var pathStack = [];

  function fetchDir(path) {
    return new Promise(
      function(resolve, reject) {
        window.resolveLocalFileSystemURL(path, function(dirEntry) {
          var directoryReader = dirEntry.createReader();
          directoryReader.readEntries(function success(entries) {
                resolve(entries)
              });
          }, function error(err) {
                reject(new Error('error: ' + err))
          });
      });        
    }

  window.fileManager = fileManager; //for debugging
  
  return {
    init: function(path) {
      fileManager = document.createElement('div');
      fileManager.className = 'FileManager';
      fileManager.id = Date.now(); 

      this.createListView(path);

      document.body.appendChild(fileManager);
    },

    createListView: function(path) {
      pathStack.push(path)

      while(fileManager.hasChildNodes()) {
        fileManager.removeChild(fileManager.lastChild)
      }

      infoBar = InfoBar(path, pathStack);
      fileManager.appendChild(infoBar.dom())   
      
      listView = ListView();
      listView.init(fetchDir(path), this)

      fileManager.appendChild(listView.dom());
    },

    setPath: function(path) {
      this.createListView(path)
    },

    dir: function(path) {
      return fetchDir(path);
    },

    dom : function(child) {
      if(arguments.length!==0 && child!=null) {
        fileManager.appendChild(child);
      }
      return fileManager;
    },

    getId: function() {
      return fileManager.id;
    }

  };    
}

var fileManager = FileManager()