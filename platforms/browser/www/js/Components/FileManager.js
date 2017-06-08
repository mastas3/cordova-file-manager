var FileManager = function() {
  var fileManager = document.createElement('div');
  fileManager.className = 'FileManager';
  
  var id = Date.now(); 

  return {
    dom : function(child) {
      if(arguments.length!==0 && child!=null) {
        fileManager.appendChild(child);
      }
      return fileManager;
    },

    getId: function() {
      return id;
    }
  };    
}

var fileManager = FileManager()